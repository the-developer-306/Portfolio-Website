import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education"; // Import the new component
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills"; // Import the new component
// import Achievements from "./components/Achievements"; // Import the new component
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-beige">
            <div
              className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(128,0,128,0.1)_1px,
            transparent_1px),linear-gradient(to_bottom,rgba(128,0,128,0.1)_1px,transparent_1px)] bg-[size:14px_24px]"
            ></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,rgba(128,0,128,0.5),transparent)]"></div>
          </div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            {/* <Route path="/achievements" element={<Achievements />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
