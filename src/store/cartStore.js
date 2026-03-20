import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create()(
  persist(
    (set, get) => ({
      cartItems: [],
      selectedLocation: 'Madhapur',
      isCartOpen: false,
      
      visitingFee: 49,
      tipAmount: 0,
      
      setLocation: (location) => set({ selectedLocation: location }),
      setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
      setVisitingFee: (fee) => set({ visitingFee: fee }),
      setTip: (amount) => set({ tipAmount: amount }),
      
      addItem: (item) => {
        const { cartItems } = get();
        const existing = cartItems.find((i) => i.id === item.id);
        
        if (existing) {
          set({
            cartItems: cartItems.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ cartItems: [...cartItems, { ...item, quantity: 1, category: item.category || 'General' }] });
        }
      },
      
      removeItem: (id) => {
        const { cartItems } = get();
        const existing = cartItems.find((i) => i.id === id);
        
        if (existing && existing.quantity > 1) {
          set({
            cartItems: cartItems.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            ),
          });
        } else {
          set({ cartItems: cartItems.filter((i) => i.id !== id) });
        }
      },
      
      clearCart: () => set({ cartItems: [], tipAmount: 0 }),
      
      getTotalPrice: () => {
        return get().cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      },

      getServiceFee: () => {
        const subtotal = get().getTotalPrice();
        if (subtotal === 0) return 0;
        return subtotal > 1500 ? 0 : get().visitingFee;
      },

      getTaxAmount: () => {
        const subtotal = get().getTotalPrice();
        if (subtotal === 0) return 0;
        return Math.round(subtotal * 0.09); // 9% tax and fee as per latest requirement
      },

      getFinalTotal: () => {
        const subtotal = get().getTotalPrice();
        if (subtotal === 0) return 0;
        const fee = get().getServiceFee();
        const tax = get().getTaxAmount();
        const tip = get().tipAmount;
        return subtotal + fee + tax + tip;
      },
      
      getItemCount: () => {
        return get().cartItems.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'charminar-cart-storage',
    }
  )
);
