import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AboutMe = () => {
  const skills = [
    { name: 'Figma', level: 100 },
    { name: 'Adobe XD', level: 100 },
    { name: 'Adobe Photoshop', level: 85 },
    { name: 'Adobe Illustrator', level: 60 },
    { name: 'Adobe Premiere', level: 70 }
  ];

  return (
    <section className=" text-white py-12">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <img
            src="/assets/newimage.png"
            alt="Profile"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* About Me Text Section */}
        <div className="lg:w-2/3 lg:ml-12 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <h3 className="text-xl text-gray-400 mb-4">
            User Interface And User Experience And Also Video Editing
          </h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            A software engineer, the modern-day architect of digital realms, navigates
            the ethereal landscapes of code, sculpting intricate structures that shape
            our technological world...
          </p>

          {/* Download CV Button */}
          <a
            href="/path-to-your-cv.pdf"
            className="inline-block bg-orange-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-orange-600 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Skills Section with Circular Progress Bars */}
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="w-24 h-24 mb-4">
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  textColor: 'white',
                  pathColor: '#f97316',
                  trailColor: '#2d3748',
                })}
              />
            </div>
            <h3 className="text-xl font-semibold text-center">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;