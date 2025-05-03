import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={exp.id} className="relative mb-20 flex flex-col sm:flex-row items-center">
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden z-10">
                <img
                  src={exp.img || "/assets/fallback.png"}
                  onError={(e) => {
                    e.currentTarget.src = "/assets/fallback.png";
                  }}
                  alt={exp.company}
                  className="w-full h-full object-contain p-1"
                />
              </div>

              {/* Timeline Content Box */}
              <div
                className={`mt-12 sm:mt-0 w-full sm:w-1/2 p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                  isLeft ? "sm:pr-12 sm:ml-0 sm:mr-auto" : "sm:pl-12 sm:ml-auto sm:mr-0"
                }`}
              >
                <div className="flex items-center space-x-6 mb-4">
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={exp.img || "/assets/fallback.png"}
                      onError={(e) => {
                        e.currentTarget.src = "/assets/fallback.png";
                      }}
                      alt={exp.company}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">{exp.company}</h4>
                    <p className="text-sm text-gray-500 mt-2">{exp.date}</p>
                  </div>
                </div>
                <p className="text-gray-400">{exp.desc}</p>
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {exp.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
