'use client';

export default function Loading() {
    return (
        <div className="global-loader-container">
            <div className="loader-ring-wrapper">
                <div className="loader-diamond"></div>
                <div className="loader-ring-bg"></div>
                <div className="loader-ring"></div>
                <div className="loader-circle">
                    <img src="/images/charminar-repairs-logo.jpeg" alt="Charminar Repairs Logo" className="loader-logo" />
                </div>
            </div>

            <div className="loader-text-container">
                <span className="loader-text">Loading</span>
                <span className="loader-dots"></span>
            </div>

            <div className="loader-bar-container">
                <div className="loader-bar"></div>
            </div>

            <style jsx>{`
                .global-loader-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: radial-gradient(circle at center, #2e266f 0%, #100b33 100%);
                    z-index: 9999;
                }
                
                .loader-ring-wrapper {
                    position: relative;
                    width: 140px;
                    height: 140px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 50px;
                }

                .loader-diamond {
                    position: absolute;
                    width: 160px;
                    height: 160px;
                    background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%);
                    transform: rotate(45deg);
                    border-radius: 8px;
                    z-index: 1;
                }
                
                .loader-ring-bg {
                    position: absolute;
                    top: -15px;
                    left: -15px;
                    right: -15px;
                    bottom: -15px;
                    border: 4px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    z-index: 2;
                }
                
                .loader-ring {
                    position: absolute;
                    top: -15px;
                    left: -15px;
                    right: -15px;
                    bottom: -15px;
                    border: 4px solid transparent;
                    border-top: 4px solid #fff;
                    border-right: 4px solid #fff;
                    border-radius: 50%;
                    animation: spin 1.5s linear infinite;
                    z-index: 3;
                }
                
                .loader-circle {
                    width: 100%;
                    height: 100%;
                    background: #fff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                    z-index: 4;
                    padding: 24px;
                    position: relative;
                }
                
                .loader-logo {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
                
                .loader-text-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                }
                
                .loader-text {
                    color: #fff;
                    font-size: 16px;
                    font-weight: 500;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                }
                
                .loader-dots {
                    display: inline-block;
                    width: 24px;
                    text-align: left;
                    color: #fff;
                    font-size: 18px;
                    font-weight: bold;
                    letter-spacing: 3px;
                }
                
                .loader-dots::after {
                    content: '.';
                    animation: dots 1.5s steps(4, end) infinite;
                }
                
                .loader-bar-container {
                    width: 200px;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.1);
                    position: relative;
                    overflow: hidden;
                    border-radius: 2px;
                }
                
                .loader-bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 30%;
                    background: #fff;
                    border-radius: 2px;
                    animation: slide 1.5s infinite ease-in-out;
                }
                
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes dots {
                    0%, 20% { content: ''; }
                    40% { content: '.'; }
                    60% { content: '..'; }
                    80%, 100% { content: '...'; }
                }
                
                @keyframes slide {
                    0% { left: -30%; width: 30%; }
                    50% { width: 50%; }
                    100% { left: 100%; width: 30%; }
                }
            `}</style>
        </div>
    );
}
