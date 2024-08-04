import { useEffect } from 'react';
import './App.css';
import AboutUs from "./Wiki/Paragraphs/AboutUs/AboutUs.jsx";
import CodeExample from "./Wiki/Paragraphs/CodeExample/CodeExample.jsx";
import HowToJoin from "./Wiki/Paragraphs/HowToJoin/HowToJoin.jsx";

function App() {
    useEffect(() => {
        let rotation = 1;

        const handleScroll = () => {
            const logo = document.querySelector('.logo');
            if (logo) {
                const scrollY = window.scrollY;
                rotation = (scrollY / 2) % 360;

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
            <h1>About us</h1>
            <AboutUs />
            <h1>How to join?</h1>
            <HowToJoin />
            <h2 id="links">Other links</h2>
            <CodeExample />
            <p className="smallh">Hello from the devs!</p>
        </>
    );
}

export default App;
