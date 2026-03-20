import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmfq9Y3kE1GuXCP-klV2UDVYU20BHVBus",
  authDomain: "charminar-repairs.firebaseapp.com",
  projectId: "charminar-repairs",
  storageBucket: "charminar-repairs.firebasestorage.app",
  messagingSenderId: "582718266624",
  appId: "1:582718266624:web:1f0bdf4ed109dc675e67e5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
