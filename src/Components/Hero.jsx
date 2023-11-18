import backgroundImage from "../assets/images/homepage/mobile/image-homepage-hero@2x.jpg";
import { NavLink } from "react-router-dom";
import defaultBtn from "./defaultBtn";

const Hero = () => {
  return (
    <main className="mobile md:tablet xl:desktop h-[60rem] w-full ">
      <section className="md:bg-tablet lg:bg-desktop xl:bg-desktopXL bg-no-repeat w-full h-full bg-top bg-cover  relative ">
        <div className="md:hidden mb-[2.4rem] md:mb-0">
          <img src={backgroundImage} aria-hidden />
        </div>
        <div className="md:bg-white md:w-[51.4rem] xl:w-[44.5rem] md:h-[27.8rem] xl:h-[35.7rem] md:absolute bottom-0 left-0 md:pt-[5.6rem] flex md:block flex-col justify-center items-center md:items-start">
          <h1 className="hidden md:block">
            Hey, I'm Orton Bright and I love building beautiful Websites
          </h1>
          <h2 className="md:hidden text-center mb-[3.2rem]">
            Hey, I'm Orton Bright and I love building beautiful Websites
          </h2>
          <button
            to={"/about"}
            className={`btn bg-primaryDarkBlue text-white group hover:bg-primary transition-all ease-in-out duration-200 md:absolute bottom-0`}
          >
            <span className="px-[1.8rem] bg-[#192b38] py-[2rem] group-hover:bg-[#468a7b] transition-all ease-in-out duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                <g fill="none" fillRule="evenodd" stroke="#5FB4A2">
                  <path d="M0 9l8 4 8-4" />
                  <path opacity=".5" d="M0 5l8 4 8-4" />
                  <path opacity=".25" d="M0 1l8 4 8-4" />
                </g>
              </svg>
            </span>
            <span className="px-[3.8rem] py-[1.2rem] tracking-[2px]">
              resume
            </span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
