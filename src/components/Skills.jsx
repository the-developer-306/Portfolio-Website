// Skills.jsx
import React from "react";
import { 
  SiExpress, 
  SiMongodb, 
  SiPython, 
  SiDjango, 
  SiJavascript, 
  SiGit, 
  SiTensorflow 
} from "react-icons/si";
import { 
  BiLogoPostgresql 
} from "react-icons/bi";
import { 
  RiReactjsLine 
} from "react-icons/ri";
import { 
  GrMysql 
} from "react-icons/gr";
import { 
  FaNodeJs, 
  FaJava, 
  FaHtml5, 
  FaCss3Alt 
} from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  console.log("Rendering Skills Component");

  return (
    <div >
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Technologies Proficient in
      </motion.h2>
      
      {/* Skills Icons */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {/* React */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        
        {/* MySQL */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
          <GrMysql className="text-7xl text-yellow-500" />
        </motion.div>
        
        {/* MongoDB */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
          <SiMongodb className="text-7xl text-cyan-500" />
        </motion.div>
        
        {/* Express */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
          <SiExpress className="text-7xl text-red-700" />
        </motion.div>
        
        {/* Node.js */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        
        {/* PostgreSQL */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        
        {/* Java */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
          <FaJava className="text-7xl text-orange-500" />
        </motion.div>
        
        {/* Python */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
          <SiPython className="text-7xl text-yellow-400" />
        </motion.div>
        
        {/* Django */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
          <SiDjango className="text-7xl text-green-700" />
        </motion.div>
        
        {/* TensorFlow */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
          <SiTensorflow className="text-7xl text-orange-400" />
        </motion.div>
        
        {/* JavaScript */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>
        
        {/* HTML5 */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4">
          <FaHtml5 className="text-7xl text-red-500" />
        </motion.div>
        
        {/* CSS3 */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>
        
        {/* Git */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4">
          <SiGit className="text-7xl text-orange-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
