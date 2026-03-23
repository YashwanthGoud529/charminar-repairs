'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

const ClientScripts = () => {
    useEffect(() => {

    }, []);

    return (
        <>
            {/* WhatsApp Widget handled by ScrollToTop component */}
            <Script
                src="https://www.vitelglobal.in/static/assets/js/chat.js"
                strategy="lazyOnload"
                id="chat-js-init"
                onLoad={() => {
                    const options = {
                        "enabled": true,
                        "chatButtonSetting": {
                            "backgroundColor": "#25d366",
                            "ctaText": "",
                            "borderRadius": "50",
                            "marginLeft": "0",
                            "marginBottom": "110",
                            "marginRight": "30",
                            "position": "right"
                        },
                        "brandSetting": {
                            "brandName": "Charminar Repairs",
                            "brandSubTitle": "Appliance Repair Specialists | Hyderabad",
                            "brandImg": "/images/charminar-repairs-logo.jpeg",
                            "welcomeText": "Hi there!<br>Need expert appliance repair services? We're here to help!",
                            "messageText": "Hi, I need service for my %0A- [Appliance Type: Washing Machine/AC/Fridge etc.]%0A- [Issue Description]%0A- [Location in Hyderabad]",
                            "backgroundColor": "#090956",
                            "ctaText": "Start Chat",
                            "borderRadius": "25",
                            "autoShow": false,
                            "phoneNumber": "918008615049",
                            "welcomeTextUser": "Hi Charminar Repairs! I came across your appliance repair service and need assistance with:"
                        }
                    };
                    if (typeof window.CreateWhatsappChatWidget === 'function') {
                        window.CreateWhatsappChatWidget(options);
                    }
                }}
            />
            <Script
                src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
                onLoad={() => {
                    if (typeof window.emailjs !== 'undefined') {
                        window.emailjs.init('Rcrbs5ULJ7P15PhZv');
                    }
                }}
            />
        </>
    );
};

export default ClientScripts;
