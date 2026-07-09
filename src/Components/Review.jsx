// src/components/Review.jsx
import React, { useRef } from 'react';
import '../Styler/Review.css';
import { TestimonialData } from '../assets/assest';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay, FreeMode } from 'swiper/modules';

const Review = () => {
    const swiperRef = useRef(null);

    // Forcefully capture the exact current CSS pixel offset and lock it down
    const handleMouseEnter = () => {
        if (swiperRef.current) {
            const swiper = swiperRef.current;
            swiper.autoplay.stop();
            // This locks the wrapper's exact transform matrix coordinate instantly
            swiper.setTranslate(swiper.getTranslate());
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current) {
            const swiper = swiperRef.current;
            swiper.slideTo(swiper.activeIndex, swiper.params.speed, true);
            swiper.autoplay.start();
        }
    };

    return (
        <section className="TestimonialSection">
            <h1 className="TestimonialTitle">
                <span className="BrandColorText">What</span> They Say
            </h1>

            <div
                className="TestimonialSliderContainer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={30}
                    slidesPerView={3}
                    freeMode={true}
                    speed={5000}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="TestimonialSwiper"
                >
                    {TestimonialData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="FeedbackCard">
                                <div className="Lighter"></div>

                                <div className="RatingRow">
                                    <span className="RatingNum">{item.rating}</span>
                                    <div className="Stars">
                                        {item.stars.map((starClass, index) => (
                                            <i className={starClass} key={index}></i>
                                        ))}
                                    </div>
                                </div>

                                <p className="ReviewText">“{item.review}”</p>

                                <div className="UserBio">
                                    <img src={item.avatar} alt={item.name} className="UserAvatar" />
                                    <h3 className="UserName">{item.name}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Review;