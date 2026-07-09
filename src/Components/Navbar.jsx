// src/Components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import '../Styler/Navbar.css';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observerOptions = {
            root: null,
            // Adjust rootMargin to trigger the change when section occupies the top/middle of screen
            rootMargin: '-40% 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Captures the id attribute of the visible section
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <nav>
            <div className="LeftSider">
                <span><p>The</p> Legendary</span>
            </div>
            <div className="RightSider">
                <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
                <a href="#works" className={activeSection === 'works' ? 'active' : ''}>Works</a>
                <a href="#services" className={activeSection === 'services' ? 'active' : ''}>My Services</a>
                <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>

                <a href="#contact" className={`ContactBtn ${activeSection === 'contact' ? 'active' : ''}`}><button>Contact Me</button></a>
            </div>
        </nav>
    );
};

export default Navbar;