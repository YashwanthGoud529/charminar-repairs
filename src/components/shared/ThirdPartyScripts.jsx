'use client';

import { useEffect } from 'react';

export default function ThirdPartyScripts() {
    useEffect(() => {
        // Delay third-party scripts by 3.5 seconds to ensure main thread is free for initial paint/interaction
        const timer = setTimeout(() => {
            // Google Tag Manager
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WBWPP63W');

            // Google AdSense
            const adsense = document.createElement('script');
            adsense.async = true;
            adsense.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9089863982371941';
            adsense.crossOrigin = 'anonymous';
            document.body.appendChild(adsense);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    return null;
}
