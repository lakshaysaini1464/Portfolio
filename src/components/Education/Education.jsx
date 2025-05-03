import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={edu.id} className="relative mb-20 flex flex-col sm:flex-row items-center">
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden z-10">
                <img
                  src={edu.img || "/assets/fallback.png"}
                  onError={(e) => {
                    e.currentTarget.src = "/assets/fallback.png";
                  }}
                  alt={edu.school}
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
                  <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img || "/assets/fallback.png"}
                      onError={(e) => {
                        e.currentTarget.src = "/assets/fallback.png";
                      }}
                      alt={edu.school}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">{edu.school}</h4>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>
                <p className="text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-4 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
