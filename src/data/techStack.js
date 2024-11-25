// Import your SVG icons
import reactIcon from '../assets/react-svgrepo-com.svg';
import jsIcon from '../assets/javascript-svgrepo-com.svg';
import nodeIcon from '../assets/node-svgrepo-com.svg';
import tailwindIcon from '../assets/tailwind-svgrepo-com.svg';
import cssIcon from '../assets/css-3-svgrepo-com.svg';
import htmlIcon from '../assets/html-5-svgrepo-com.svg';

export const techStackData = [
    {
        id: 1,
        name: 'React',
        icon: reactIcon,
        description: 'Modern web applications with React ecosystem',
        category: 'Frontend',
        proficiency: 90,
        position: { top: '10%', left: '40%' },
        animation: {
            duration: 4,
            delay: 0,
            y: [-20, 20],
            rotate: [-5, 5]
        },
        projects: [
            {
                name: 'Portfolio Website',
                description: 'Personal portfolio built with React and Tailwind'
            },
            {
                name: 'E-commerce Dashboard',
                description: 'Admin dashboard with React and Redux'
            }
        ],
        resources: [
            {
                title: 'React Documentation',
                url: 'https://reactjs.org'
            }
        ]
    },
    {
        id: 2,
        name: 'JavaScript',
        icon: jsIcon,
        description: 'Core JavaScript development including ES6+ features',
        category: 'Frontend',
        proficiency: 85,
        position: { top: '25%', right: '15%' },
        animation: {
            duration: 3,
            delay: 0.5,
            y: [20, -20],
            rotate: [5, -5]
        },
        projects: [
            {
                name: 'Task Management App',
                description: 'Vanilla JS application with local storage'
            }
        ],
        resources: [
            {
                title: 'MDN JavaScript Guide',
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'
            }
        ]
    },
    {
        id: 3,
        name: 'Node.js',
        icon: nodeIcon,
        description: 'Server-side JavaScript with Express and npm packages',
        category: 'Backend',
        proficiency: 75,
        position: { bottom: '25%', right: '15%' },
        animation: {
            duration: 3.5,
            delay: 1,
            y: [-15, 15],
            rotate: [-3, 3]
        },
        projects: [
            {
                name: 'REST API',
                description: 'RESTful API built with Express and MongoDB'
            }
        ],
        resources: [
            {
                title: 'Node.js Documentation',
                url: 'https://nodejs.org/docs'
            }
        ]
    },
    {
        id: 4,
        name: 'Tailwind CSS',
        icon: tailwindIcon,
        description: 'Utility-first CSS framework for rapid UI development',
        category: 'Frontend',
        proficiency: 80,
        position: { bottom: '10%', left: '40%' },
        animation: {
            duration: 4,
            delay: 1.5,
            y: [15, -15],
            rotate: [3, -3]
        },
        projects: [
            {
                name: 'Portfolio Website',
                description: 'Responsive design using Tailwind CSS'
            }
        ],
        resources: [
            {
                title: 'Tailwind Documentation',
                url: 'https://tailwindcss.com/docs'
            }
        ]
    },
    {
        id: 5,
        name: 'HTML5',
        icon: htmlIcon,
        description: 'Modern HTML5 with semantic elements and best practices',
        category: 'Frontend',
        proficiency: 95,
        position: { bottom: '25%', left: '15%' },
        animation: {
            duration: 3.8,
            delay: 2,
            y: [-10, 10],
            rotate: [-2, 2]
        },
        projects: [
            {
                name: 'Portfolio Website',
                description: 'Semantic HTML structure with accessibility'
            }
        ],
        resources: [
            {
                title: 'MDN HTML Guide',
                url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
            }
        ]
    },
    {
        id: 6,
        name: 'CSS3',
        icon: cssIcon,
        description: 'Advanced CSS3 with animations and responsive design',
        category: 'Frontend',
        proficiency: 85,
        position: { top: '25%', left: '15%' },
        animation: {
            duration: 4.2,
            delay: 2.5,
            y: [-12, 12],
            rotate: [-4, 4]
        },
        projects: [
            {
                name: 'Portfolio Website',
                description: 'Custom animations and responsive layouts'
            }
        ],
        resources: [
            {
                title: 'MDN CSS Guide',
                url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
            }
        ]
    }
];