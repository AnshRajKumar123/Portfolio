import React, { useRef } from "react";
import "../Styler/Skills.css";
import { SkillData } from "../assets/assest";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef();

    useGSAP(() => {
        // Title
        gsap.from(".SkillsTitle", {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current, // <--- CHANGE STRING TO REF OBJECT
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });

        // 2. Description
        gsap.from(".HeadDescription", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current, // <--- CHANGE STRING TO REF OBJECT
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });

        // Each Skill Row
        gsap.utils.toArray(".SkillRow").forEach((row) => {
            const items = row.querySelectorAll(".SkillItem");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });

            tl.from(row, {
                y: 80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            }).from(
                items,
                {
                    y: 30,
                    opacity: 0,
                    scale: 0.9,
                    stagger: 0.08,
                    duration: 0.5,
                    ease: "back.out(1.6)",
                },
                "-=0.4"
            );
        });
    }, { scope: sectionRef });

    return (
        <section className="SkillsSection" id="skills" ref={sectionRef}>
            <h1 className="SkillsTitle">
                My <b>Skills</b>
            </h1>

            <p className="HeadDescription">
                My skills are those I've learned and developed over the years. By
                studying, focusing, and being consistent in what I love most.
            </p>

            <div className="SkillsContainer">
                {SkillData.map((cat) => (
                    <div className="SkillRow" key={cat.id}>
                        <div className="ForColorSeter"></div>

                        <div className="SkillCategory">
                            <i className={cat.mainIcon}></i>
                            <h2>{cat.category}</h2>
                        </div>

                        <div className="SkillsGrid">
                            {cat.skillsList.map((skill, index) => (
                                <div className="SkillItem" key={index}>
                                    <img
                                        src={skill.iconSrc}
                                        alt={skill.name}
                                        className="SkillIcon"
                                    />
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;