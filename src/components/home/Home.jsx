import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="mx-16 my-6 py-6 sm:mx-4 sm:my-2 p-40 pb-40" id="home">
      <div>
        <div>
          <h2 className="text-[#959595] sm:text-center md:text-left mb-4">
            Hello, I am
          </h2>
          <h1 className="text-[#B9B9B9] sm:text-center md:text-left mb-4">
            Faisal Ahmed
          </h1>
          <h1 className="md:text-4xl sm:text-4xl text-orange-500 font-extrabold sm:text-center md:text-left">
            Frontend Developer
          </h1>
        </div>

        <div>
          <div className="mt-5 flex sm:items-center sm:justify-center md:justify-start">
            <a
              className="mr-2 rounded-full opacity-40 bg-gray-700"
              href="https://github.com/Feisal14"
            >
              <FaGithub />
            </a>
            <a
              className="rounded-full opacity-40"
              href="https://www.linkedin.com/in/faisal-yanbaawi/"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="mt-5 flex sm:justify-center md:justify-start">
            <a
              className="bg-orange-500 rounded-md md:w-28 sm:w-24 h-9 font-mono font-bold sm:mb-4 mr-4 text-center content-center"
              href="#"
            >
              Hire Me
            </a>
         
            <a
              className="text-gray-400 rounded-md border-2 md:w-36 sm:w-28 h-9 border-gray-400 text-center content-center"
              href="/assets/Faisal Ahmad, Resume (1).pdf"
              download
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
