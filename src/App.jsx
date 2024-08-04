import { useEffect } from 'react';
import './App.css';

function App() {
    useEffect(() => {
        let rotation = 1;

        const handleScroll = () => {
            const logo = document.querySelector('.logo');
            if (logo) {
                const scrollY = window.scrollY;
                rotation = (scrollY / 1.9) % 360;

                logo.style.transform = `rotate(${rotation}deg)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div>
                <a href="http://localhost:5173/">
                    <img src="/src/assets/scp-white.svg" className="logo" alt="SCP Logo"
                         style={{width: "8rem", height: "8rem"}}/>
                </a>
            </div>
            <h1 className="firsth">Site-91</h1>
            <h3 className="quote">We die in the dark so that you may live in the light</h3>
            <a href="http://localhost:5173/src/Wiki/Paragraphs/CodeExample/index.html">
                <button className="read-docs-button">
                    Read the docs
                </button>
            </a>
            <div className="social-links">
                <a href="https://discord.gg/n2Xz3GVK5r" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/discord.svg" alt="Discord"/>
                </a>
                <a href="https://github.com/site91/" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/github.svg" alt="Github"/></a>
            </div>
        </>
    );
}

export default App;
