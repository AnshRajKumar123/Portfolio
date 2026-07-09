import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styler/Contact.css";
import { ContactInfo } from "../assets/assest";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const formRef = useRef();
    const sectionRef = useRef();

    const [isSending, setIsSending] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none none",
            },
        });

        // Title
        tl.from(".ContactTitle", {
            y: -50,
            opacity: 0,
            duration: 0.4,
            ease: "power3.out",
        });

        // Inputs
        tl.from(
            ".InputWrapper",
            {
                y: 25,
                opacity: 0,
                stagger: 0.15,
                duration: 0.5,
                ease: "power2.out",
            },
            "-=0.4"
        );

        // Right Cards
        tl.from(
            ".ContactInfoCard",
            {
                x: 80,
                opacity: 0,
                stagger: 0.2,
                duration: 0.7,
                ease: "power3.out",
            },
            "-=0.8"
        );
    }, { scope: sectionRef });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            'service_5xnfmz8',   // Replace with your EmailJS Service ID
            'template_scfs44f',  // Replace with your EmailJS Template ID
            formRef.current,
            'cNCgJk4nBYgM5RfKg'    // Replace with your EmailJS Public Key
        )
            .then(() => {
                alert('Message sent successfully!');
                formRef.current.reset(); // Clear input fields
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Failed to send the message. Please try again.');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section className="ContactSection" id='contact' ref={sectionRef}>
            <h1 className="ContactTitle">Contact <span className="BrandColorText">Me</span></h1>

            <div className="ContactContainer">
                {/* Left Side Form Layout */}
                <form ref={formRef} onSubmit={sendEmail} className="ContactForm">
                    <div className="InputWrapper">
                        <input type="text" name="user_name" placeholder="Name" required />
                    </div>
                    <div className="InputWrapper">
                        <input type="email" name="user_email" placeholder="Email" required />
                    </div>
                    <div className="InputWrapper">
                        <textarea name="message" placeholder="Message" rows="6" required></textarea>
                    </div>

                    <button type="submit" className="SendButton" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send Message'} <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </form>

                {/* Right Side Cards Layout */}
                <div className="ContactDetails">
                    <a href={`mailto:${ContactInfo.email}`} className="ContactInfoCard">
                        <div className="InfoLeft">
                            <i className="fa-solid fa-envelope InfoIcon"></i>
                            <div>
                                <span>Email</span>
                                <p>{ContactInfo.email}</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-arrow-up-right-from-square ArrowIcon"></i>
                    </a>

                    <a href={`tel:${ContactInfo.phone.replace(/\s+/g, '')}`} className="ContactInfoCard">
                        <div className="InfoLeft">
                            <i className="fa-solid fa-phone InfoIcon"></i>
                            <div>
                                <span>Phone number</span>
                                <p>{ContactInfo.phone}</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-arrow-up-right-from-square ArrowIcon"></i>
                    </a>

                    <div className="ContactInfoCard LocationCard">
                        <div className="InfoLeft">
                            <i className="fa-solid fa-location-dot InfoIcon"></i>
                            <div>
                                <span>Location</span>
                                <p>{ContactInfo.location}</p>
                            </div>
                        </div>
                        <div className="ArrowIcon CircleArrow">
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;