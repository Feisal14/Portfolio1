import { navItems } from "../../../data";
const Navbar = () => {
  return (
    <div className=" mx-16 my-6 py-6">
      <div className="flex justify-between">
        <h1 className="text-orange-500 text-center font-bold text-2xl">LOGO</h1>
        <div className="">
          {navItems.map((navItem) => (
            <a
              key={navItem.name}
              href={navItem.link}
              className="px-7 text-gray-400"
            >
              {navItem.name}
            </a>
          ))}
        </div>

        <button className="bg-orange-500 rounded-md w-36 h-11 font-mono font-thin">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
