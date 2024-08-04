import { useEffect } from 'react';
import './App.css';
import AboutUs from "./Wiki/Paragraphs/AboutUs/AboutUs.jsx";
import CodeExample from "./Wiki/Paragraphs/CodeExample/CodeExample.jsx";

function App() {
    useEffect(() => {
        let rotation = 0;

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
            <p>To join our community, begin by downloading and installing the Technic Launcher. Open the launcher and
                log in with your Minecraft account. Navigate to the &quot;Modpacks&quot; tab, then search for and select
                the Site-91 modpack. Download and launch it, and when Minecraft starts, look for a prominent button
                labeled &quot;Join Site-91&quot; and click it.</p>
            <p>The server will take a few moments to start up, so if you encounter any issues, please wait 3-5 minutes
                and try again. For access to different levels and departments, be sure to join our <a
                    href="#links">Discord</a> server.</p>
            <h2 id="links">Other links</h2>
            <CodeExample />
            <p className="smallh">
                Hello from the developers of website!
            </p>
        </>
    );
}

export default App;
