import React from "react";
import logo from "/servicesAssets/logo.svg";

const Services = ({ services }) => {
  return (
    <div className="services-section bg-[#1b1b1b] py-10">
      <h2 className="text-center text-white text-3xl mb-8">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#2b2b2b] text-center p-10 rounded-xl hover:bg-[#3b3b3b] cursor-pointer transition-colors duration-300"
          >
            <img src={logo} alt="Service Icon" className="mx-auto mb-4" />
            <h3 className="text-orange-500 text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
