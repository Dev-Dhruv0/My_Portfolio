export const projectsData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Modern portfolio website built with React and Framer Motion",
        longDescription: "A personal portfolio website showcasing my projects and skills. Built with React, Vite, and Framer Motion for smooth animations. Features include interactive components, responsive design, and modern UI/UX practices.",
        thumbnail: "/projects/portfolio.png", 
        technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        category: "Web Development",
        links: {
            github: "https://github.com/Dev-Dhruv0/My_Portfolio",
            live: "https://my-portfolio-kappa-three-67.vercel.app/"
        },
        featured: true
    },
    {
        id: 2,
        title: "ShoeSphere",
        description: "Modern e-commerce website for shoes built with React and Tailwind CSS",
        longDescription: "A responsive e-commerce platform focused on shoes, featuring a modern user interface, product catalog, and smooth animations. Built with React Vite and styled with Tailwind CSS for a seamless shopping experience.",
        thumbnail: "/projects/dashboard.jpg", 
        technologies: ["React", "Vite", "Tailwind CSS"],
        category: "Frontend",
        links: {
            github: "https://github.com/Dev-Dhruv0/ShoeSphere",
            live: "https://shoesphere-demo-url.com"
        },
        featured: true
    },
    {
        id: 3,
        title: "Weather App",
        description: "Real-time weather application with location tracking",
        longDescription: "Weather application that provides real-time weather information based on user location. Features include 7-day forecast, weather alerts, and location search functionality.",
        thumbnail: "/weather.jpg", 
        technologies: ["JavaScript", "Weather API", "HTML5", "CSS3"],
        category: "Frontend",
        links: {
            github: "https://github.com/yourusername/weather-app",
            live: "https://weather-app-demo.com"
        },
        featured: false
    }
];

export const projectCategories = [
    "All",
    "Web Development",
    "Full Stack",
    "Frontend",
    "Backend"
];