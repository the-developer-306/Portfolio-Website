import { motion } from "framer-motion";
import projlogo from "../assets/projects/project-1.webp"; // Update with the actual image path
import educationImage from "../assets/education.png";

const Projects = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-10">
      {/* Heading and Image Section */}
      <div className="flex items-center justify-between w-full mb-10">
        <motion.img
          src={educationImage}
          alt="Education"
          className="mr-4"
          style={{ width: "40%" }} // Set the width to 40% of its original size
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.h1
          className="text-8xl font-bold text-white"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Projects
        </motion.h1>
      </div>

      {/* Card for B.Tech */}
      <div className="flex items-center justify-between w-full bg-gray-800 shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105">
        <img
          src={projlogo}
          alt="Madan Mohan Malviya University"
          className="w-24 h-24 rounded-full mr-4 border border-gray-300"
        />
        <div className="flex-1 mx-4">
          <h2 className="text-2xl font-semibold text-white">Cosneckt</h2>
          <p className="text-gray-400">
            Cosneckt is a web-based chat application designed to facilitate
            real-time communication between users.
          </p>
          <p className="text-gray-400">
            Technologies Used: React, HTML, CSS, Node.js, Express.js, MongoDB,
            Socket.io
          </p>

          <a
            href="https://github.com/the-developer-306/Cosneckt"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 text-center transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            View Repository
          </a>
        </div>
      </div>

      {/* Card for XII */}
      <div className="flex items-center justify-between w-full bg-gray-800 shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105">
        <img
          src={projlogo}
          alt="H.A.L Vidyalaya"
          className="w-24 h-24 rounded-full mr-4 border border-gray-300"
        />
        <div className="flex-1 mx-4">
          <h2 className="text-2xl font-semibold text-white">
            House-Price-Predictor
          </h2>
          <p className="text-gray-400">
            Harnessing machine learning algorithms to forecast housing prices in
            Boston, empowering buyers and sellers with accurate predictions
            based on key factors like location, crime rate, rooms,
            accessibility, and more.
          </p>
          <p className="text-gray-400">
            Technologies Used: Python, Sci-kit learn, NumPy, Pandas, Matplotlib,
            Jupyter (development environment)
          </p>
          <a
            href="https://github.com/the-developer-306/House-Price-Predictor"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 text-center transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            View Repository
          </a>
        </div>
      </div>

      {/* Card for X */}
      <div className="flex items-center justify-between w-full bg-gray-800 shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105">
        <img
          src={projlogo}
          alt="Methodist High School"
          className="w-24 h-24 rounded-full mr-4 border border-gray-300"
        />
        <div className="flex-1 mx-4">
          <h2 className="text-2xl font-semibold text-white">
            Voice Assistant System
          </h2>
          <p className="text-gray-400">
            Powerful, intuitive, and personalized voice-controlled interface for
            efficient task execution. Empowers users with Python's capabilities,
            understanding and responding to commands accurately and quickly.
          </p>
          <p className="text-gray-400">
            Technologies Used: Python, Pyttsx3, Speech-recognition, PyQt5,
            PyWiki, Qt-designer
          </p>
          <a
            href="https://github.com/the-developer-306/Voice-Assistant-System"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 text-center transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            View Repository
          </a>
        </div>
      </div>

      {/* Card for X */}
      <div className="flex items-center justify-between w-full bg-gray-800 shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105">
        <img
          src={projlogo}
          alt="Methodist High School"
          className="w-24 h-24 rounded-full mr-4 border border-gray-300"
        />
        <div className="flex-1 mx-4">
          <h2 className="text-2xl font-semibold text-white">
            Restaurant-Website
          </h2>
          <p className="text-gray-400">
            A modern, responsive website for a restaurant. Features menu display, online food ordering, about us section and contact info.
          </p>
          <p className="text-gray-400">
            Technologies Used: HTML, CSS, Bootstrap, PHP, MySQL.
          </p>
          <a
            href="https://github.com/the-developer-306/Restaurant-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 text-center transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            View Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
