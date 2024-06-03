import { meta, shopify, starbucks, tesla } from "../../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    react,
    redux,
    tailwindcss,
    typescript,
    
} from "../../assets/icons"; 
import nestjs from "../../assets/icons/nestjs.svg"
import flask from "../../assets/icons/flask.svg"
import machinelearning from "../../assets/icons/machine-learning.svg"

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: nestjs,
        name: "nestjs",
        type: "Backend",
    },
    {
        imageUrl: machinelearning,
        name: " Machine Learning",
        type: "",
    },
    {
        imageUrl: flask,
        name: "flask",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },


    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Jeeniso",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "December 2023 - April 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Jeeniso",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "December 2023 - April 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sedkibagga',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/bagga-sedki-618532296/',
    }
];

export const projects = [



    {
        // iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Jwt Auth',
        description: 'MERN JWT Auth: Secure user authentication with JWT and bcrypt.js on the backend, Redux Toolkit for state management on the frontend.',
        link: 'https://github.com/sedkibagga/Jwt-Auth',
    }, 
    {
        // iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Movie-APP ',
        description: 'Movie-App is your go-to mobile application for finding the top movies currently trending. Leveraging the power of the TMDB (The Movie Database) API, our app provides you with up-to-date information…',
        link: 'https://github.com/sedkibagga/Movie-APP',
    }, 
    {
        // iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'CarMarketPlace  ',
        description: 'CarMarketplace: Your go-to destination for buying and selling cars online. Browse, buy, and sell with ease on our user-friendly platform tailored for car enthusiasts.',
        link: 'https://github.com/sedkibagga/CarMarketPlace',
    }, 
    {
        // iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'github-finder-app  ',
        description: 'GitHub Finder App is a web application that allows users to search for GitHub profiles and view detailed information about them. Utilizing the GitHub API, it provides users with up-to-date information on their repositories, followers, and following. ',
        link: 'https://github.com/sedkibagga/github-finder-app',
    }, 
    {
        // iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'feedback-app ',
        description: 'Feedback App: Simplifying the process of sharing insights. Easily express your feedback and contribute to continuous improvement effortlessly  ',
        link: 'https://github.com/sedkibagga/feedback-app',
    }, 
    {
        // iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'FootKits',
        description: 'FootKits is an e-commerce platform offering a wide range of football gear, accessories, and fan merchandise. Discover top-quality products from leading brands and enhance your football experience. ',
        link: 'https://github.com/sedkibagga/FootKits',
    },
    {
        // iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'fitlifejurney ',
        description: 'FitLifeJourney: Your virtual fitness companion website. Access personalized nutrition guidance and curated meal plans based on your goals and preferences, powered by APIs delivering precise calorie recommendations. Plan your workouts seamlessly alongside expert coaching, empowering you on your journey to a healthier lifestyle. ',
        link: 'https://github.com/sedkibagga/fitlifejurney',
    },
    {
        // iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'FaceClock-Mobile-app ',
        description: 'FaceClock" is a cutting-edge facial recognition timekeeping application designed to streamline workforce management in enterprises. Leveraging advanced facial recognition technology, this innovative app automates the attendance tracking process, ensuring accurate and efficient timekeeping for employees.',
        link: 'https://github.com/sedkibagga/FaceClock-Mobile-app',
    },
    
    {
        // iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: '3D-Portfolio', 
        description: '3D-Portfolio" is an immersive web application developed using React and Three.js, designed to showcase your projects and portfolio in a visually stunning 3D environment. This project combines the power of React for dynamic web development with the flexibility and creativity of Three.js for creating captivating 3D graphics',
        link: 'https://github.com/sedkibagga/3D-Portfolio',
    },
    
    

];