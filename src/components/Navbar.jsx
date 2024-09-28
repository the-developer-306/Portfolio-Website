import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between py-6 px-4 lg:px-8">
      <div className="flex items-center">
        <Link to="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-stone-300 hover:text-stone-500">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="m-8 flex flex-col lg:flex-row items-center justify-center gap-4 text-xl">
          <Link
            to="/"
            className="text-stone-300 hover:text-stone-500 transition duration-300 ease-in-out"
            aria-label="Home"
          >
            Home
          </Link>
          <Link
            to="/education"
            className="text-stone-300 hover:text-stone-500 transition duration-300 ease-in-out"
            aria-label="Education"
          >
            Education
          </Link>
          <Link
            to="/experience"
            className="text-stone-300 hover:text-stone-500 transition duration-300 ease-in-out"
            aria-label="Experience"
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="text-stone-300 hover:text-stone-500 transition duration-300 ease-in-out"
            aria-label="Projects"
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="text-stone-300 hover:text-stone-500 transition duration-300 ease-in-out"
            aria-label="Skills"
          >
            Skills
          </Link>
          <Link
            to="/achievements"
            className="text-stone-300 hover:text-stone-500 transition duration-300 ease-in-out"
            aria-label="Achievements"
          >
            Achievements
          </Link>
          <Link
            to="/contact"
            className="text-stone-300 hover:text-stone-500 transition duration-300 ease-in-out"
            aria-label="Contact Me"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
