import { FaGlobeAmericas, FaFacebook, FaLinkedin } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

const Header = () => {
  return (
    <div className="relative lg:flex justify-between items-center w-full h-auto bg-gradient-to-r from-[#4233c5] via-[#645aeb] to-[#4233c5] p-5 mx-auto overflow-hidden">
      <div className="animated-bg"></div>
      <div className="animated-bg"></div>
      <div className="animated-bg"></div>

      <div className="w-full flex flex-row items-center mx-auto">
        <img
          src="ece-club.svg"
          alt="ECE Club of HSTU"
          className="w-[100px] sm:w-[120px] sm:mb-0"
        />
        <div className="ml-5 text-left">
          <h1 className="text-white text-xl sm:text-2xl font-bold my-1">
            ECE Club of HSTU
          </h1>
          <p className="text-neutral-200 font-bangla text-sm sm:text-base font-medium">
            ইসিই ক্লাব অব এইচএসটিইউ
          </p>
          <div className="flex justify-start gap-2 text-white text-base mt-2">
            <a href="https://hstu.ac.bd/cse/ece">
              <FaGlobeAmericas className="hover:text-black hover:bg-white border-0 rounded-full w-5 h-5 transition-transform transform hover:scale-105" />
            </a>
            <a href="https://www.facebook.com/ececlubhstu">
              <FaFacebook className="hover:text-black hover:bg-white border-0 rounded-full w-5 h-5 transition-transform transform hover:scale-105" />
            </a>
            <a href="https://www.linkedin.com/company/82090073">
              <FaLinkedin className="hover:text-black hover:bg-white border-0 w-5 h-5 transition-transform transform hover:scale-105" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-white mt-14 font-light items-end hidden lg:block flex flex-col sm:flex-row justify-end">
        <a
          href="https://hstu.ac.bd/cse/ece"
          className="flex items-center pl-[44px]"
        >
          <p>hstu.ac.bd/cse/ece</p>
          <CiGlobe className="ml-1" />
        </a>
        <div className="flex items-center">
          <p>ececlubofhstu@gmail.com</p>
          <AiOutlineMail className="ml-1" />
        </div>
      </p>
    </div>
  );
};

export default Header;
