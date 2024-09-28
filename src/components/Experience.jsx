import { motion } from "framer-motion";
import companyOneImage from "../assets/CES_cut.png"; // Update with the actual image path
import experienceImage from "../assets/education.png"; // Update with the actual image path

const Experience = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-10">
      {/* Heading and Image Section */}
      <div className="flex items-center justify-between w-full mb-10">
        <motion.img
          src={experienceImage}
          alt="Experience"
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
          EXPERIENCE
        </motion.h1>
      </div>

      {/* Card for Company One */}
      <div className="flex items-center justify-between w-full bg-gray-800 shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105">
        <img
          src={companyOneImage}
          alt="Company One"
          className="w-24 h-24 rounded-full mr-4 border border-gray-300"
        />
        <div className="flex-1 mx-4">
          <h2 className="text-2xl font-semibold text-white">
            Executive Board Member | Computer Engineering Society
          </h2>
          <p className="text-gray-400">June 2023 - Present</p>
          <h3 className="text-xl text-gray-200">Key Responsibilities:</h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>Development CTF questions including concepts of Cryptography, Steganography, Web exploitation.</li>
            <li>Collaborative Deployment of CTF Website using Microsoft Azure, Docker, Kubernetes.</li>
            <li>Development of Competitive Programming questions.</li>
            <li>Organised Coding Contests on for junior year students on plateforms such as Hackerrank, Codechef.</li>
          </ul>
          {/* <a
            href="https://www.companyone.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 text-center transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            Visit Website
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
