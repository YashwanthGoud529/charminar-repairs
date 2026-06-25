'use client';

import React from 'react';
import FAQ from '@/components/shared/FAQ';

const PACKERS_MOVERS_FAQS = [
    {
        question: "What services do you offer as part of your Packers and Movers?",
        answer: "We offer end-to-end services including packing, loading, transporting, unloading, and unpacking of household and office goods."
    },
    {
        question: "How do you ensure the safety of fragile and valuable items?",
        answer: "We use high-quality packing materials such as bubble wrap, cartons, and foam to secure fragile items. Our team is trained to handle delicate items with care."
    },
    {
        question: "Do you provide door-to-door relocation services?",
        answer: "Yes, we provide complete door-to-door services to ensure a hassle-free relocation experience."
    },
    {
        question: "Are there any hidden charges in your pricing?",
        answer: "No, our pricing is transparent, and we provide detailed quotes upfront. There are no hidden fees."
    },
    {
        question: "What areas do you serve?",
        answer: "We provide packers and movers services across major cities in India, covering most metropolitan areas."
    },
    {
        question: "Can I reschedule my moving date?",
        answer: "Yes, we offer flexible scheduling. You can reschedule your move by contacting our support team in advance."
    },
    {
        question: "What if my goods get damaged during transit?",
        answer: "We take all precautions to prevent damage, but in the rare case of damage, we offer insurance coverage to compensate for any losses."
    },
    {
        question: "How do you determine the cost of the move?",
        answer: "The cost is determined by factors such as the volume of goods, distance, type of services required (packing/unpacking), and any additional requests like insurance or special handling."
    },
    {
        question: "Do you offer insurance for the move?",
        answer: "Yes, we provide optional insurance coverage to protect your belongings during transit."
    },
    {
        question: "How do I book your services?",
        answer: "You can book our services by contacting us via phone, email, or through our website. A booking confirmation will be provided once details are finalised."
    },
    {
        question: "Do you provide transportation for vehicles like cars or bikes?",
        answer: "Yes, we offer specialised vehicle transportation services for cars and bikes."
    },
    {
        question: "How early should I book my move?",
        answer: "We recommend booking at least a week in advance to ensure availability, especially during peak moving seasons."
    },
    {
        question: "How long does the moving process take?",
        answer: "The time depends on factors like the distance of the move and the volume of goods. For local moves, it typically takes a day, while long-distance moves may take a few days."
    },
    {
        question: "Can you handle international relocations?",
        answer: "At the moment, we specialize in domestic relocations within India."
    },
    {
        question: "What items should I avoid packing during the move?",
        answer: "Avoid packing hazardous materials like flammable liquids, explosives, and perishables like food items, as they may not be safe for transportation."
    },
    {
        question: "Can I track my shipment during the move?",
        answer: "Yes, we offer tracking services so that you can monitor the status of your shipment during transit."
    },
    {
        question: "Do you offer storage services if I need to temporarily store my goods?",
        answer: "Yes, we provide secure and reliable short-term and long-term storage facilities if needed."
    },
    {
        question: "What kind of vehicles do you use for transporting goods?",
        answer: "We have a fleet of vehicles ranging from small trucks for local moves to large trucks for long-distance relocations, ensuring the right vehicle for your needs."
    },
    {
        question: "Do I need to be present during the packing and moving process?",
        answer: "It is preferable for you or a representative to be present to supervise and provide guidance, but we can manage the process independently if needed."
    },
    {
        question: "How do I prepare for my move?",
        answer: "We recommend decluttering, labelling boxes, and informing us of any special requests ahead of time to ensure a smooth and efficient move."
    }
];

const PackersMoversFAQSection = ({ location = "Hyderabad", bgColor }) => {
    // Map questions dynamically to include the specific location name
    const localizedFAQs = PACKERS_MOVERS_FAQS.map(item => {
        let question = item.question;
        let answer = item.answer;

        // Apply localization swaps
        if (question === "What areas do you serve?") {
            answer = `We provide packers and movers services across ${location} and 21+ major cities in India, covering most metropolitan areas.`;
        }
        return { question, answer };
    });

    return (
        <div className="packers-movers-faq-section-wrapper">
            <FAQ 
                title={`Packers and Movers in ${location} - FAQ`}
                items={localizedFAQs}
                compact={true}
                bgColor={bgColor}
            />
        </div>
    );
};

export default PackersMoversFAQSection;
