import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken
        </p>
      </div>

      {/* TIMELINE WRAPPER */}
      <div className="relative">

        {/* CENTER LINE */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >

            {/* ATTACHED DOT */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8245ec] rounded-full z-20"></div>

            {/* CARD */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              transform transition-transform duration-300 hover:scale-105
              ${index % 2 === 0 ? "mr-auto ml-0" : "ml-auto mr-0"}`}
            >

              {/* HEADER */}
              <div className="flex items-center space-x-6">

                {/* LOGO (ONLY INSIDE CARD) */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm sm:text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>

              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 text-gray-400">
                {experience.desc}
              </p>

              {/* SKILLS */}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Experience;