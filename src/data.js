import { nanoid } from "nanoid";

// tech stack image
import html5 from './assets/images/techstack/html5.png';
import css3 from './assets/images/techstack/css3.png';
import javascript from './assets/images/techstack/js.png';
import typescript from './assets/images/techstack/typescript.png';
import react from './assets/images/techstack/reactjs.png';
import tailwindcss from './assets/images/techstack/tailwindcss.png';
import sass from './assets/images/techstack/sass-1-logo-png-transparent.png';

// projects image
import gymFitnessTracker from './assets/images/gym-fitness-tracker.vercel.app_.png';
import buzzNews from './assets/images/buzz-news.vercel.app_.png';
import ipMovies from './assets/images/homepage.png';
import beauxCosmetic from './assets/images/cover-1.png';

export const menuData = [
    { id: nanoid(), name: 'Home', url: 'home' },
    { id: nanoid(), name: 'About', url: 'about' },
    { id: nanoid(), name: 'Projects', url: 'projects' },
    { id: nanoid(), name: 'Contact', url: 'contact' },
];

export const techStack = [
    { id: nanoid(), name: 'html5', image: html5 },
    { id: nanoid(), name: 'css3', image: css3 },
    { id: nanoid(), name: 'javascript', image: javascript },
    { id: nanoid(), name: 'typescript', image: typescript },
    { id: nanoid(), name: 'reactjs', image: react },
    { id: nanoid(), name: 'tailwindcss', image: tailwindcss },
    { id: nanoid(), name: 'sass', image: sass }, 
];

export const projectsData = [
    { 
        id: nanoid(),
        thumbnail: gymFitnessTracker,
        name: 'Gym Fitness Tracker',
        description: 'Gym Fitness Tracker Website is an online mode exercise website where anyone can learn all type of workout exercise like biceps, triceps, back, shoulders, abs, etc. There is no need of any Trainer to learn any workout exercise. In that website anyone can learn with the help of gif in which it shows that how to do exercise with correct position. If anyone click on gif it renders to you with similar equipment exercises and some related youtube videos link to learn easily.',
        techStack: ['React', 'TailwindCSS', 'React Router Dom', 'Rapid API'],
        source: 'https://github.com/chetrasom/gym-fitness-tracker.git',
        demo: 'https://gym-fitness-tracker.vercel.app/',
    },
    { 
        id: nanoid(),
        thumbnail: buzzNews,
        name: 'Buzz News',
        description: 'Buzz News is a website that provides users with the latest news from around the world. The app utilizes the NewsAPI to gather news articles. This app allows users to read the latest news articles from many popular website sources.',
        techStack: ['React', 'TailwindCSS', 'React Router Dom', 'Contenful headless CMS'],
        source: 'https://github.com/chetrasom/buzz-news.git',
        demo: 'https://buzz-news.vercel.app/',
        order: true
    },
    { 
        id: nanoid(),
        thumbnail: ipMovies,
        name: 'IP Movies',
        description: 'IP Movies is a dynamic platform that utilizes the TMDB API to fetch and display detailed information about movies and TV shows. This application provides users with an engaging interface to explore and discover their favorite films and television series. Users can search for specific movies or TV shows using the search filters, enabling them to find content based on criteria such as title, release date and ratings. One of the standout features of the application is the ability to play trailers. Users can watch trailers of movies and TV shows directly within the application.',
        techStack: ['React', 'TailwindCSS', 'React Router Dom', 'TMDB API', 'Redux Toolkit'],
        source: 'https://github.com/chetrasom/ipmovies.git',
        demo: 'https://ipmovies.vercel.app/',
        order: false
    },
    { 
        id: nanoid(),
        thumbnail: beauxCosmetic,
        name: 'Beaux Cosmetic Shop',
        description: 'Beaux Cosmetics Shop aims to bring the online cosmetics business in Cambodia to the next level of professionalism and responsibilities. That is why it’s well known throughout the country for its professional leadership and warm-hearted customer service provided by its dealers all around the country. In addition, all BEAUX’s customers could get high-quality products conveniently by buying via an online platform.',
        techStack: ['React', 'TailwindCSS', 'Strapi headless CMS', 'React Router Dom', 'Redux Toolkit'],
        source: 'https://github.com/chetrasom/beaux-cosmetic-shop.git',
        demo: 'https://beaux-cosmetic-shop.vercel.app/',
        order: false
    },
];