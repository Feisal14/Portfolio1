import { useState, useEffect } from "react";
import { navItems } from "../../data"; // Assuming you have nav items here
import { FaAlignLeft } from "react-icons/fa6";
import gsap from "gsap";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    if (dropdown) {
      gsap.to("#dropdown", { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to("#dropdown", { x: -50, opacity: 0, duration: 0.4, ease: "power2.in" });
    }
  }, [dropdown]);

  return (
    <div className="mx-8 my-4 py-4 sm:mx-4 sm:my-2 p-40">
      <div className="flex items-center justify-between sm:flex-row sm:justify-between">

        {/* Burger Menu for Mobile */}
        <button
          className="navitems sm:flex md:hidden lg:hidden"
          onClick={handleDropdown}
        >
          <FaAlignLeft className="text-gray-400 text-2xl" />
        </button>

        {/* Logo */}
        <h1 className="text-orange-500 font-bold text-2xl sm:text-lg sm:text-center">
          <button>FAISAL</button>
        </h1>

        {/* Navigation Items for Desktop */}
        <div className="hidden md:flex lg:flex">
          {navItems.map((navItem) => (
            <a
              key={navItem.name}
              href={navItem.link}
              className="px-5 text-gray-400 hover:text-orange-400 text-lg"
            >
              {navItem.name}
            </a>
          ))}
        </div>

        {/* Hire Me Button */}
        <button className="bg-orange-500 text-white rounded-md px-2 h-10 font-mono font-bold hover:bg-orange-600 transition-all sm:w-20 sm:h-8">
          Hire Me
        </button>
      </div>

      {/* Dropdown Menu (Mobile) */}
      {dropdown && (
        <div
          id="dropdown"
          className="absolute top-14 left-0 bg-dark-background z-50 p-4 w-36 text-left shadow-md sm:w-full sm:top-16"
        >
          {navItems.map((navItem) => (
            <a
              key={navItem.name}
              href={navItem.link}
              className="block text-gray-400 hover:text-orange-400 py-2"
            >
              {navItem.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
