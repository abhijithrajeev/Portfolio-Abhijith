import project1 from "../assets/projects/comfortcoProj.png";
import project2 from "../assets/projects/chatapp.png";
import project3 from "../assets/projects/PortProj.png";
import project4 from "../assets/projects/accoProject.png";

export const HERO_CONTENT = `I'm a passionate full-stack developer specializing in both front-end and back-end technologies. My expertise includes ReactJS, HTML, CSS with Tailwind CSS for responsive design, and server-side development with Node.js and ExpressJS. I'm proficient in MongoDB and MySQL for database management and have experience developing advanced e-commerce solutions on Shopify. My goal is to create robust, scalable web applications that enhance business growth and user experience.`;

export const ABOUT_TEXT = `I am a passionate full-stack developer specializing in creating robust, scalable web applications that drive business growth and enhance user experience. With a strong foundation in both front-end and back-end technologies, I have developed proficiency in ReactJS, HTML, and CSS, enhanced by Tailwind CSS for responsive design. My server-side expertise encompasses Node.js and ExpressJS, paired with solid skills in MongoDB and MySQL for comprehensive database management. I have a particular knack for developing advanced e-commerce solutions on Shopify. I am dedicated to leveraging my technical skills to solve complex problems and continuously seeking to learn and adapt to emerging technologies. Outside of development, I enjoy exploring new tech trends and contributing to community-driven projects.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - Present",
    role: "Software Development Intern",
    company: "Terrific Minds",
    description: `As a Software Development Intern at Terrific Minds, I worked with the Shopify team to build an ecommerce website for The Comfort Co. I developed and optimized online retail features, ensuring a seamless user experience and implementing best practices in web development.`,
    technologies: ["Javascript", "HTML", "CSS", "JQuery"],
  },
];

export const PROJECTS = [
  {
    title: "The Comfort Co. Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication using shopify.",
    technologies: ["HTML", "CSS", "JQuery", "Shopify Liquid"],
  },
  {
    title: "ChatWave: Chat-App",
    image: project2,
    description:
      "Chatwave is a full stack chatting app that features real-time chatting, user-authentication, group chats, live-notifications using Socket.io for real-time communication.",
    technologies: ["ReactJS", "ExpressJS", "MongoDB", "NextJS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "AccomoCET: Accomodation for Students",
    image: project4,
    description:
      "A web app built using the MERN stack to help CET students find suitable hostel accommodations. The platform features secure authentication, separate user and owner logins, and a user-friendly UI for efficient searching of accommodations.",
    technologies: ["ReactJS", "ExpressJS", "MongoDB", "NextJS"],
  },
];

export const CONTACT = {
  address: " MITRA 47 Thamalam Poojapura P.O. 695012 ",
  phoneNo: "+91 7559070623 ",
  email: "abhijithrajeev883@gmail.com",
};
