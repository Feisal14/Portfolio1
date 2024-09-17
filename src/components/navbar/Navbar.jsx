import { useState } from "react";
import { navItems } from "../../../data";
import { FaAlignLeft } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  useGSAP(() => {
    if (dropdown == true) gsap.to("#dropdown", { x: -20 });
    else {
      gsap.to("#dropdown", { x: -42 });
    }
  }, [dropdown]);
  return (
    <div className="mx-16 my-6 py-6 sm:mx-4 sm:my-2">
      <div className="flex md:justify-between items-center lg:justify-between sm:justify-between  sm:items-center ">
        <button
          className="navitems hidden md:hidden sm:flex "
          onClick={handleDropdown}
        >
          <FaAlignLeft />
          <div id="dropdown" className="-translate-x-9">
            {dropdown && (
              <span className="flex flex-col absolute -mt-1 mx-1 bg-dark-background w-36">
                {navItems.map((navItem) => (
                  <a
                    key={navItem.name}
                    href={navItem.link}
                    className=" text-gray-400 hover:text-orange-400 focus:text-orange-400 active:text-orange-700 "
                  >
                    {navItem.name}
                  </a>
                ))}
              </span>
            )}
          </div>
        </button>
        <h1 className="text-orange-500 font-bold text-2xl sm:text-center md:text-left">
          <button>FAISAL</button>
        </h1>
        <div className="hidden sm:hidden md:flex">
          {navItems.map((navItem) => (
            <a
              key={navItem.name}
              href={navItem.link}
              className="px-7 text-gray-400 hover:text-orange-400 focus:text-orange-400 active:text-orange-700 text-lg"
            >
              {navItem.name}
            </a>
          ))}
        </div>

        <button className="bg-orange-500 rounded-md w-36 h-11 font-mono font-bold sm:mb-4 ">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
