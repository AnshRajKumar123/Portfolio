import My_Image from './Images/My_Image.png'

import Proj1 from './Images/ImageGallary.jpeg'
import Proj2 from './Images/MidNFooDWeb.jpeg'
import Proj3 from './Images/ParklyImage.jpeg'
import Proj4 from './Images/ZenitsuWebsite.jpeg'
import Proj5 from './Images/Appple_Landing.jpeg'
import Proj6 from './Images/RenegadeImmortal.jpeg'

export const Portfolio = {
    My_Image,
}

export const ProjectData = [
    {
        num: "01",
        projname: "Aniterest",
        src: Proj1,
        projdes: "Aniterest is a modern anime discovery platform that enables users to browse, search, and explore a wide collection of anime titles through a clean, interactive interface.",
        link: "https://aniterest.vercel.app/"
    },
    {
        num: "02",
        projname: "MidNight N Food",
        src: Proj2,
        projdes: "A modern and responsive food delivery website showcasing healthy meal subscriptions with an engaging user experience and clean, interactive design.",
        link: "https://midnightfood.vercel.app/"
    },
    {
        num: "03",
        projname: "Parkly",
        src: Proj3,
        projdes: "A sleek and responsive parking service landing page that delivers a modern user experience with clean design, smooth interactions, and intuitive navigation.",
        link: "https://parkly01.vercel.app"
    },
    {
        num: "04",
        projname: "Zenitsu Agatsuma",
        src: Proj4,
        projdes: "A visually stunning anime-inspired landing page featuring smooth animations, immersive visuals, and a fully responsive design for an engaging user experience.",
        link: "https://zenitsu-website.vercel.app/"
    },
    {
        num: "05",
        projname: "Apple Macbook",
        src: Proj5,
        projdes: "A sleek Apple-inspired product landing page featuring smooth GSAP animations, premium visuals, and a fully responsive design for an immersive user experience.",
        link: "https://applelanding-olive.vercel.app/"
    },
    {
        num: "06",
        projname: "Wang Ling",
        src: Proj6,
        projdes: "Renegade Immortal is a visually immersive anime-inspired website that brings Wang Lin's legendary cultivation journey to life through stunning design and smooth interactive animations.",
        link: "https://renegadeimmortal.vercel.app/"
    },
];


// Add this to your existing src/assets/assest.js file

export const ServiceData = [
    {
        id: "service-1",
        icon: "fa-solid fa-code",
        title: "Website Developer",
        description: "The service I offer to companies and clients involves working on professional, high-quality projects, doing what I am most passionate about.",
        tags: ["Web Development", "Web Performance"]
    },
    {
        id: "service-2",
        icon: "fa-solid fa-server",
        title: "Backend Developer",
        description: "Building robust servers, organizing secure database solutions, creating APIs, and managing server infrastructure optimized for speed and scalability.",
        tags: ["NodeJS / Express", "Database Management"]
    },
    {
        id: "service-3",
        icon: "fa-solid fa-palette",
        title: "Web Designer",
        description: "Crafting beautiful layouts, modern typography, responsive visual architectures, and interactive user interfaces using modern user experiences.",
        tags: ["UI/UX Design", "Figma To Code"]
    },
    {
        id: "service-4",
        icon: "fa-solid fa-magnifying-glass-chart",
        title: "SEO Specialist",
        description: "Optimizing code structures, improving search visibility, refining meta metadata structures, and enhancing accessibility scores for top search ranking.",
        tags: ["Search Optimization", "Speed Audits"]
    }
];



// --- FRONTEND ICONS ---
import Frontend1 from '../assets/img/skills-frontend-1.svg'; // HTML
import Frontend2 from '../assets/img/skills-frontend-2.svg'; // CSS
import Frontend3 from '../assets/img/skills-frontend-3.svg'; // JS
import Frontend4 from '../assets/img/skills-frontend-4.svg'; // React
import Frontend5 from '../assets/img/skills-frontend-5.svg'; // Sass
import Frontend6 from '../assets/img/skills-frontend-6.svg'; // Git
import Frontend7 from '../assets/img/skills-frontend-7.svg'; // GitHub

// --- BACKEND ICONS ---
import Backend1 from '../assets/img/skills-backend-1.svg';   // Laravel
import Backend2 from '../assets/img/skills-backend-2.svg';   // PostgreSQL
import Backend3 from '../assets/img/skills-backend-3.svg';   // Node.js
import Backend4 from '../assets/img/skills-backend-4.svg';   // Supabase
import Backend5 from '../assets/img/skills-backend-5.svg';   // Socket.io

// --- DESIGN ICONS ---
import Design1 from '../assets/img/skills-design-1.svg';     // Figma
import Design2 from '../assets/img/skills-design-2.svg';     // Blender
import Design3 from '../assets/img/skills-design-3.svg';     // After Effects
import Design4 from '../assets/img/skills-design-4.svg';     // Photoshop
import Design5 from '../assets/img/skills-design-5.svg';     // Illustrator
import Design6 from '../assets/img/skills-design-6.svg';     // Framer

export const SkillData = [
    {
        id: "cat-1",
        category: "Frontend",
        mainIcon: "fa-solid fa-table-columns", // Left-side category icon
        skillsList: [
            { name: "HTML", iconSrc: Frontend1 },
            { name: "CSS", iconSrc: Frontend2 },
            { name: "JavaScript", iconSrc: Frontend3 },
            { name: "React", iconSrc: Frontend4 },
            { name: "Sass", iconSrc: Frontend5 },
            { name: "Git", iconSrc: Frontend6 },
            { name: "GitHub", iconSrc: Frontend7 }
        ]
    },
    {
        id: "cat-2",
        category: "Backend",
        mainIcon: "fa-solid fa-server",
        skillsList: [
            { name: "Laravel", iconSrc: Backend1 },
            { name: "PostgreSQL", iconSrc: Backend2 },
            { name: "Node Js", iconSrc: Backend3 },
            { name: "Supabase", iconSrc: Backend4 },
            { name: "Socket.io", iconSrc: Backend5 }
        ]
    },
    {
        id: "cat-3",
        category: "Design",
        mainIcon: "fa-solid fa-compass-drafting",
        skillsList: [
            { name: "Figma", iconSrc: Design1 },
            { name: "Blender", iconSrc: Design2 },
            { name: "After effects", iconSrc: Design3 },
            { name: "Photoshop", iconSrc: Design4 },
            { name: "Illustrator", iconSrc: Design5 },
            { name: "Framer", iconSrc: Design6 }
        ]
    }
];


import Testimonial1 from '../assets/img/testimonial-1.png';
import Testimonial2 from '../assets/img/testimonial-2.png';
import Testimonial3 from '../assets/img/testimonial-3.png';
import Testimonial4 from '../assets/img/testimonial-4.png';

export const TestimonialData = [
    {
        id: "t-1",
        name: "Elemar Rice",
        avatar: Testimonial2,
        rating: "5.0",
        review: "This young man is very disciplined; he delivered a professional and high-quality project. He is always in contact and active regarding time. Good work.",
        stars: ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"]
    },
    {
        id: "t-2",
        name: "Rita Treds",
        avatar: Testimonial3,
        rating: "4.8",
        review: "Exceptional frontend skill! He perfectly transformed our design concepts into highly clean, interactive code. The layout structure runs remarkably fast.",
        stars: ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-regular fa-star-half-stroke"]
    },
    {
        id: "t-3",
        name: "Augus Drix",
        avatar: Testimonial4,
        rating: "5.0",
        review: "Incredible attention to detail on our database backend architecture. Scalability issues vanished completely under his optimization steps.",
        stars: ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"]
    },
    {
        id: "t-4",
        name: "Sarah Jenkins",
        avatar: Testimonial1,
        rating: "4.5",
        review: "Great communication throughout the design phase. He built beautiful intuitive user paths and was incredibly receptive to feedback updates.",
        stars: ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-regular fa-star"]
    }
];


export const ContactInfo = {
    email: "golu.kkpncc.99008@gmail.com",
    phone: "+91 7367824173",
    location: "Kailash Colony, Greater Kailash, New Delhi, Delhi",
};