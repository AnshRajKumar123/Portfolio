// src/components/Service.jsx
import React, { useState, useRef } from 'react';
import '../Styler/Service.css';
import { ServiceData } from '../assets/assest';

// Import GSAP modules
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Service = () => {
    const [openServiceId, setOpenServiceId] = useState(null);
    const containerRef = useRef();

    // 1. Setup ScrollTrigger for overall entry stagger
    useGSAP(() => {
        // Fade & move title up
        gsap.fromTo(".ServiceSection h1",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".ServiceSection h1",
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );

        // Stagger accordion bars one after another
        gsap.fromTo(".ServiceOptB",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".ServiceBox",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, { scope: containerRef });

    // 2. Custom function handling dynamic accordion height morphing with GSAP
    const toggleService = (id, event) => {
        const currentAccordion = event.currentTarget;
        const contentHider = currentAccordion.querySelector('.LowerHider');
        const icon = currentAccordion.querySelector('.Dowener i');

        const isOpen = openServiceId === id;

        if (!isOpen) {
            // Close any currently open accordion row first globally
            gsap.to('.LowerHider', { height: 0, duration: 0.4, ease: 'power2.out' });
            gsap.to('.Dowener i', { rotation: 0, duration: 0.3 });

            // Animate target row into dynamic auto-height view smoothly
            gsap.to(contentHider, { height: 'auto', duration: 0.5, ease: 'power2.out' });
            gsap.to(icon, { rotation: 180, duration: 0.3 });
            setOpenServiceId(id);
        } else {
            // Collapse row cleanly if clicked again
            gsap.to(contentHider, { height: 0, duration: 0.4, ease: 'power2.out' });
            gsap.to(icon, { rotation: 0, duration: 0.3 });
            setOpenServiceId(null);
        }
    };

    return (
        <section className='ServiceSection' id='services' ref={containerRef}>
            <h1><b>My</b> Services</h1>

            <div className="ServiceBox">
                {ServiceData.map((service) => {
                    const isOpen = openServiceId === service.id;

                    return (
                        <div
                            className={`ServiceOptB ${isOpen ? 'active' : ''}`}
                            key={service.id}
                            onClick={(e) => toggleService(service.id, e)}
                        >
                            <div className="UpperBody">
                                <div className="Along">
                                    <div className="ServiceLogo">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h1>{service.title}</h1>
                                </div>
                                <div className="Dowener">
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>

                            {/* Make sure height is explicitly handled/set initially to 0 via CSS */}
                            <div className="LowerHider" style={{ height: 0, overflow: 'hidden' }}>
                                <div className="LowerHiderContent">
                                    <p>{service.description}</p>

                                    <div className="WebTechlogy">
                                        {service.tags.map((tag, index) => (
                                            <div className="Logy" key={index}>
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Service;