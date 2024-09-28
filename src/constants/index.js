import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = ``
export const EXPERIENCES = [
  {
    year: "",
    role: "",
    company: "",
    description: `I am a motivated Full Stack Developer continuously upskilling myself to stay ahead in the ever-evolving world of technology. Although I am at the start of my professional journey, I have a strong grasp of both front-end and back-end development and am eager to apply my knowledge to real-world projects. I am committed to learning new tools and technologies to enhance my skill set and contribute meaningfully to innovative web development solutions.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "NovaKonnect",
    image: project1,
    description:
      "NovaKonnect is a web-based chat application designed to facilitate real-time communication between users.",
    technologies: ["HTML", "CSS", "React", "Node.js","Express.js", "MongoDB","Socket.io"],
  },
  {
    title: "Blog Web App",
    image: project2,
    description:
      "This is a blog application built using React. The app allows users to view, create, and manage blog posts, and includes features such as user authentication, and a responsive design. The project is designed to provide a simple and intuitive interface for blogging and content creation.",
    technologies: ["HTML", "CSS", "React", "Appwrite"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React","Framer-motion"],
  },
  {
    title: "TODO React App",
    image: project4,
    description:
      "Developed a todo app using React and Redux Toolkit for efficient state management. Implemented featureslike task creation, deletion, and status updates.",
    technologies: ["HTML", "CSS", "React", "Redux Toolkit"],
  },
];

export const CONTACT = {
  address: "M-33, M-Zone, H.A.L Township, Sunabeda, Koraput, Odisha-763002",
  phoneNo: "(+91) 8840942759",
  email: "prathamkhanna.er2@gmail.com",
};
