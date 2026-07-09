// src/Components/Hero.jsx
import React, { useRef } from "react";
import "../Styler/Hero.css";
import { Typewriter } from "react-simple-typewriter";
import { Portfolio } from "../assets/assest";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
    const text = "EXPLORE - MORE - LET'S ";
    const heroRef = useRef();

    useGSAP(() => {
        // 1. Reveal ambient absolute background glow circles slowly
        gsap.from(".AbsoluteBox1, .AbsoluteBox2, .AbsoluteBox3", {
            opacity: 0,
            scale: 0.6,
            duration: 1.8,
            stagger: 0.2,
            ease: "power2.out",
        });

        // 2. Cascade typography introduction layout text blocks down smoothly
        gsap.from(".Content > p, .Content h1, .AutoWriter, .Content pre", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15, // Animates each typography line sequentially
            ease: "power3.out",
        });

        // 3. Smooth offset scaling entrance for your layered structural backing cards
        gsap.from(".FeiCard-1, .FeiCard-2, .FeiCard-3", {
            x: -40,
            y: 40,
            rotation: -5,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            delay: 0.5,
            ease: "power4.out",
        });

        // 4. Reveal the center portrait picture layer
        gsap.from(".Cards img", {
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            delay: 0.8,
            ease: "power3.out",
        });

        // 5. Pop up the circular rotating badge action button icon
        gsap.from(".HeroCircle", {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            delay: 1.1,
            ease: "back.out(1.5)", // Gives it a nice bouncy pop entrance
        });
    }, { scope: heroRef }); // Scope isolates calculations securely inside this container layer node

    return (
        <>
            <section className="HeroSection" id="home" ref={heroRef}>
                <div className="AbsoluteBox1"></div>
                <div className="AbsoluteBox2"></div>
                <div className="AbsoluteBox3"></div>

                <div className="Content">
                    <p>Hi! I'm Ansh - An Entrepreneur</p>

                    <h1>Creative Designer &</h1>

                    <span className="AutoWriter">
                        <Typewriter
                            words={[
                                "Frontend React Developer",
                                "UI/UX Designer",
                                "JavaScript Enthusiast",
                                "Creative Web Developer",
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={60}
                            deleteSpeed={40}
                            delaySpeed={1500}
                        />
                    </span>

                    <pre>
                        I build designs and websites that solve problems, inspiring success.
                    </pre>

                    <div className="Cards">
                        <div className="FeiCard-1"></div>
                        <div className="FeiCard-2"></div>
                        <div className="FeiCard-3"></div>

                        <img src={Portfolio.My_Image} alt="Ansh Kumar" />

                        <div className="HeroCircle">
                            <div className="HeroCircle_Text">
                                {[...text].map((char, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            transform: `rotate(${index * (360 / text.length)}deg)`,
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </div>

                            <p>
                                <i className="fa-solid fa-arrow-down"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;