import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import image2 from "../assets/image2.png"; // Adjust the path if needed

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 mt-16">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-start mt-10 ml-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tight lg:text-8xl"
            >
              Pratham Khanna
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="my-8 bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Machine Learning Developer
            </motion.span>

            <motion.span
              variants={childVariants}
              className="my-2 bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-4 max-w-lg py-6 text-xl leading-relaxed tracking-tight"
            >
              Dynamic and detail-oriented B.Tech. student specializing in Computer Science and Engineering.
            </motion.p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/the-developer-306"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-3xl text-gray-700 hover:text-black" />
              </a>
              {/* <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <AiOutlineWhatsApp className="text-3xl text-gray-700 hover:text-green-500" />
              </a> */}
              <a
                href="https://www.linkedin.com/in/pratham-khanna-609776257/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-3xl text-gray-700 hover:text-blue-600" />
              </a>
              <a
                href="mailto:prathamkhanna.er2@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <HiMail className="text-3xl text-gray-700 hover:text-red-600" />
              </a>
              <a
                href="https://www.instagram.com/khanna_sahab_3.06?igsh=MXhia2ZrMzU1MW1oOQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-3xl text-gray-700 hover:text-pink-500" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.img
            src={image2}
            alt="Profile of Pratham Khanna"
            className="max-w-full h-auto" // Ensure the image is responsive
            initial={{ opacity: 0, x: 100 }} // Start from right
            animate={{ opacity: 1, x: 0 }} // Move to original position
            transition={{ duration: 0.5 }} // Duration of animation
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
