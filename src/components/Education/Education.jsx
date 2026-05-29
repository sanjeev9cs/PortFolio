import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education journey and academic background
        </p>
      </div>

      {/* TIMELINE WRAPPER */}
      <div className="relative">

        {/* CENTER LINE */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >

            {/* CONNECTION DOT (ATTACH POINT) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8245ec] rounded-full z-20"></div>

            {/* CARD */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              transform transition-transform duration-300 hover:scale-105
              ${index % 2 === 0 ? "mr-auto ml-0" : "ml-auto mr-0"}`}
            >

              {/* HEADER */}
              <div className="flex items-center space-x-6">

                {/* LOGO (inside card only) */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>

              </div>

              {/* DETAILS */}
              <p className="mt-4 text-gray-400 font-bold">
                Grade: {edu.grade}
              </p>

              <p className="mt-2 text-gray-400">
                {edu.desc}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Education;