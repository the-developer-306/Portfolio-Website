import { motion } from "framer-motion";
import universityImage from "../assets/mmmut.png"; // Update with the actual image path
import halVidyalayaImage from "../assets/halv.jpg"; // Update with the actual image path
import methodistHighSchoolImage from "../assets/mhs.png"; // Update with the actual image path
import educationImage from "../assets/education.png"; // Update with the actual image path

const Education = () => {
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
          EDUCATION
        </motion.h1>
      </div>

      {/* Card for B.Tech */}
      <div className="flex items-center justify-between w-full bg-gray-800 shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105">
        <img
          src={universityImage}
          alt="Madan Mohan Malviya University"
          className="w-24 h-24 rounded-full mr-4 border border-gray-300"
        />
        <div className="flex-1 mx-4">
          <h2 className="text-2xl font-semibold text-white">
            B.Tech. | Madan Mohan Malviya University of Technology, Gorakhpur
          </h2>
          <p className="text-gray-400">2022-Pursuing</p>
          <p className="text-gray-400">
            Field of Study: Computer Science and Engineering
          </p>
          <p className="text-gray-400">Current CGPA: 8.29</p>
          <a
            href="http://www.mmmut.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 text-center transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            Visit Website
          </a>
        </div>
      </div>

      {/* Card for XII */}
      <div className="flex items-center justify-between w-full bg-gray-800 shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105">
        <img
          src={halVidyalayaImage}
          alt="H.A.L Vidyalaya"
          className="w-24 h-24 rounded-full mr-4 border border-gray-300"
        />
        <div className="flex-1 mx-4">
          <h2 className="text-2xl font-semibold text-white">
            XII | H.A.L Vidyalaya, Kanpur (C.B.S.E)
          </h2>
          <p className="text-gray-400">2021-2022</p>
          <p className="text-gray-400">Aggregate: 96.2% (School Topper)</p>
          <a
            href="https://www.halvidyalayakanpur.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 text-center transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            Visit Website
          </a>
        </div>
      </div>

      {/* Card for X */}
      <div className="flex items-center justify-between w-full bg-gray-800 shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105">
        <img
          src={methodistHighSchoolImage}
          alt="Methodist High School"
          className="w-24 h-24 rounded-full mr-4 border border-gray-300"
        />
        <div className="flex-1 mx-4">
          <h2 className="text-2xl font-semibold text-white">
            X | Methodist High School, Kanpur (I.C.S.E)
          </h2>
          <p className="text-gray-400">2019-2020</p>
          <p className="text-gray-400">Aggregate: 95.0%</p>
          <a
            href="https://www.mhskanpur.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 text-center transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
