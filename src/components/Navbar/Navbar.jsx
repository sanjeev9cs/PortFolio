import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState("about");

  const [isScrolled, setIsScrolled] =
    useState(false);

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => {

      setIsScrolled(window.scrollY > 50);

      const sections = [
        "about",
        "skills",
        "experience",
        "work",
        "education",
      ];

      sections.forEach((section) => {

        const element =
          document.getElementById(section);

        if (element) {

          const rect =
            element.getBoundingClientRect();

          if (
            rect.top <= 150 &&
            rect.bottom >= 150
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* SMOOTH SCROLL */
  const handleMenuItemClick = (
    sectionId
  ) => {

    setActiveSection(sectionId);

    setIsOpen(false);

    const section =
      document.getElementById(sectionId);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    {
      id: "experience",
      label: "Experience",
    },
    { id: "work", label: "Projects" },
    {
      id: "education",
      label: "Education",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100]
      px-[7vw] md:px-[7vw] lg:px-[20vw]
      transition-all duration-300
      ${
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >

      <div className="flex justify-between items-center text-white py-4">

        {/* LOGO */}
        <div className="text-base md:text-lg font-semibold cursor-pointer flex items-center">

          <span className="text-[#8245ec]">
            &lt;
          </span>

          <span className="text-white">
            Sanjeev
          </span>

          <span className="text-[#8245ec]">
            /
          </span>

          <span className="text-white">
            Kumar
          </span>

          <span className="text-[#8245ec]">
            &gt;
          </span>

        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-6 text-gray-300 text-sm md:text-base items-center">

          {menuItems.map((item) => (
            <li key={item.id}>

              <button
                onClick={() =>
                  handleMenuItemClick(item.id)
                }
                className={`relative transition duration-300 hover:text-[#8245ec]
                ${
                  activeSection === item.id
                    ? "text-[#8245ec]"
                    : ""
                }`}
              >

                {item.label}

                {/* ACTIVE LINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px]
                  bg-[#8245ec]
                  transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0"
                  }`}
                ></span>

              </button>
            </li>
          ))}

        </ul>

        {/* SOCIAL ICONS */}
        <div className="hidden md:flex space-x-4 items-center">

          <a
            href="https://github.com/sanjeev9cs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]
            transition duration-300 hover:scale-110"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/sanjeev9cs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]
            transition duration-300 hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>

        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">

          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() =>
                setIsOpen(false)
              }
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() =>
                setIsOpen(true)
              }
            />
          )}

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (

        <div
          className="absolute top-full left-1/2
          -translate-x-1/2 w-[90%]
          bg-[#050414]/80 backdrop-blur-lg
          rounded-xl shadow-lg md:hidden
          border border-[#8245ec]/20"
        >

          <ul className="flex flex-col items-center space-y-4 py-5 text-gray-300 text-sm">

            {menuItems.map((item) => (
              <li key={item.id}>

                <button
                  onClick={() =>
                    handleMenuItemClick(
                      item.id
                    )
                  }
                  className={`transition duration-300 hover:text-[#8245ec]
                  ${
                    activeSection === item.id
                      ? "text-[#8245ec]"
                      : ""
                  }`}
                >
                  {item.label}
                </button>

              </li>
            ))}

            {/* MOBILE SOCIAL ICONS */}
            <div className="flex space-x-5 pt-2">

              <a
                href="https://github.com/sanjeev9cs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8245ec]"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/sanjeev9cs/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8245ec]"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;