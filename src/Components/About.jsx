// src/Components/About.jsx
import React, { useRef } from 'react';
import '../Styler/About.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef();

    useGSAP(() => {
        // Animate the left text block
        gsap.fromTo(".LeftAbout h1",
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: ".LeftAbout",
                    start: "top 80%", // Triggers when the top of the element hits 80% from the top of the screen
                    toggleActions: "play none none none" // Plays once when entering
                }
            }
        );

        // Animate the right paragraph and button sequentially
        gsap.fromTo(".RightAbout p, .RightAbout a",
            {
                y: 40,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2, // Paragraph enters first, then the button follows
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: ".RightAbout",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

    }, { scope: aboutRef });

    return (
        <section className='AboutSection' id="about" ref={aboutRef}>
            <div className="LeftAbout">
                <h1>About Me: Young freelancer
                    who enjoys <b>web design</b> and <pre></pre>
                    <b>development</b>, passionate about
                    my work, disciplined, and
                    successful.</h1>
            </div>
            <div className="RightAbout">
                <p>If you have a project in mind, check
                    out my work and contact me to work
                    together. Best of luck!</p>

                <a href="#contact">
                    <button>
                        <span>Contact me </span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </a>
            </div>
        </section>
    );
};

export default About;