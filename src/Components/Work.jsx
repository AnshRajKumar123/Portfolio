import React, { useRef } from 'react';
import '../Styler/Work.css';
import { ProjectData } from '../assets/assest';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
    const workSectionRef = useRef();

    useGSAP(() => {
        // 1. Reveal the main heading smoothly as it enters the viewport
        gsap.fromTo(".WorkSection h1",
            {
                y: 40,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: ".WorkSection h1",
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );

        // 2. Fade in the entire Swiper card collection layout sequentially right after
        gsap.fromTo(".mySwiper",
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                delay: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: ".WorkCards",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, { scope: workSectionRef });

    const handleMouseEnter = (e) => {
        const arrow = e.currentTarget.querySelector('.Goto i');
        const img = e.currentTarget.querySelector('.ImgWork img');

        if (arrow) gsap.to(arrow, { rotation: -45, scale: 1.1, duration: 0.3, ease: 'power2.out' });
        if (img) gsap.to(img, { scale: 1.1, duration: 0.4, ease: 'power2.out' });
    };

    const handleMouseLeave = (e) => {
        const arrow = e.currentTarget.querySelector('.Goto i');
        const img = e.currentTarget.querySelector('.ImgWork img');

        if (arrow) gsap.to(arrow, { rotation: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
        if (img) gsap.to(img, { scale: 1, duration: 0.4, ease: 'power2.out' });
    };

    return (
        <section className='WorkSection' id='works' ref={workSectionRef}>
            <h1>View My <b>Work</b></h1>

            <div className="WorkCards">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper"
                >
                    {ProjectData.map((project) => (
                        <SwiperSlide key={project.num}>
                            <div
                                className="WorCard"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="ColorChangeSeter"></div>
                                <div className="ImgWork">
                                    <img src={project.src} alt={project.projname} />
                                    <a target='_blank' href={project.link} className="Goto">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                                <div className="WorkDes">
                                    <div className="Num">{project.num}</div>
                                    <div className="ProjName">{project.projname}</div>
                                    <div className="ProjDes">{project.projdes}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Work;