// Test change for Vercel deployment
export const projectsData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Modern portfolio website built with React and Framer Motion",
        longDescription: "A personal portfolio website showcasing my projects and skills. Built with React, Vite, and Framer Motion for smooth animations. Features include interactive components, responsive design, and modern UI/UX practices.",
        thumbnail: "/projects/portfolio/portfolio.png", 
        images: [
            {
                id: 1,
                url: "/projects/portfolio/portfolio.png",
                caption: "Homepage View"
            },
            {
                id: 2,
                url: "/projects/portfolio/skills.png",
                caption: "Skills Section"
            },
            {
                id: 3,
                url: "/projects/portfolio/projects.png",
                caption: "Projects Section"
            },
        ],
        technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        category: "Frontend",
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
        thumbnail: "/projects/dashboard/dashboard.jpg", 
        images: [
            {
                id: 1,
                url: "/projects/dashboard/dashboard.jpg",
                caption: "Homepage View"
            },
            {
                id: 2,
                url: "/projects/dashboard/popular-products.jpg",
                caption: "Popular Products Section"
            },
            {
                id: 3,
                url: "/projects/dashboard/super-quality.jpg",
                caption: "Super Quality Section"
            },
            {
                id: 4,
                url: "/projects/dashboard/special-offer.png",
                caption: "Special Offer Section"
            },
            {
                id: 5,
                url: "/projects/dashboard/customer-review.png",
                caption: "Customer Review Section"
            },
        ],
        technologies: ["React", "Vite", "Tailwind CSS"],
        category: "Frontend",
        links: {
            github: "https://github.com/Dev-Dhruv0/ShoeSphere",
            live: "https://shoe-sphere-beta.vercel.app/"
        },
        featured: true
    },
    {
        id: 3,
        title: "ImageFlow",
        description: "Modern image upload and gallery application with preview functionality",
        longDescription: "A sleek image management application that allows users to upload multiple images with real-time preview functionality. Features include support for up to 5 images, image type validation, WhatsApp-style image preview, and a dedicated gallery page for viewing uploaded images. Built with modern web technologies and planned for future backend integration.",
        thumbnail: "/projects/imageflow/upload.png", 
        images: [
            {
                id: 1,
                url: "/projects/imageflow/upload.png",
                caption: "Image Upload Interface"
            },
            {
                id: 2,
                url: "/projects/imageflow/preview.png",
                caption: "Image Preview Section"
            },
            {
                id: 3,
                url: "/projects/imageflow/gallery.png",
                caption: "Gallery View"
            }
        ],
        technologies: ["React", "Tailwind CSS", "Neon Database", "Blob Store", "API"],
        category: "Full Stack",
        links: {
            github: "https://github.com/Dev-Dhruv0/Image-Flow",
            live: "https://image-flow-dev-dhruvs-projects.vercel.app/"
        },
        featured: true
    }
];

export const projectCategories = [
    "All",
    "Web Development",
    "Full Stack",
    "Frontend",
    "Backend"
];