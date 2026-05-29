import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {

  const handleScroll = (sectionId) => {

    const section =
      document.getElementById(sectionId);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (

    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">

      <div className="text-center">

        <h2 className="text-xl font-semibold text-purple-500">
          Sanjeev Kumar
        </h2>

        {/* NAV LINKS */}
        <nav className="flex flex-wrap justify-center gap-4 mt-4">

          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },

            // ✅ FIX HERE
            { name: "Projects", id: "work" },

            { name: "Education", id: "education" },
          ].map((item, index) => (

            <button
              key={index}
              onClick={() =>
                handleScroll(item.id)
              }
              className="hover:text-purple-500 transition"
            >
              {item.name}
            </button>

          ))}

        </nav>

        {/* SOCIAL */}
        <div className="flex justify-center gap-5 mt-6 text-2xl">

          <a href="https://github.com/sanjeev9cs">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/sanjeev9cs/">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/sanjeev9cs">
            <FaInstagram />
          </a>

          <a href="https://www.youtube.com/@TechnologyEngineerAll">
            <FaYoutube />
          </a>

        </div>

        <p className="text-sm text-gray-400 mt-6">
          "Technology Engineer All" by Sanjeev Kumar
        </p>  

      </div>     
    
    </footer>     
  );
};

export default Footer;     