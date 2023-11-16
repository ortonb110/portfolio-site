import backgroundImage from "../assets/images/homepage/mobile/image-homepage-hero@2x.jpg";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <main className="mobile md:tablet xl:desktop h-[60rem] w-full ">
      <section className="md:bg-tablet lg:bg-desktop xl:bg-desktopXL bg-no-repeat w-full h-full bg-top bg-cover  relative">
        <div className="md:hidden">
          <img src={backgroundImage} aria-hidden />
        </div>
        <div className="bg-white md:w-[51.4rem] xl:w-[44.5rem] md:h-[27.8rem] xl:h-[35.7rem] md:absolute bottom-0 left-0 flex flex-col justify-center">
          <h1 className="hidden md:block">
            Hey, I'm Orton Bright and I love building beautiful Websites
          </h1>
          <h2 className="md:hidden text-center">Hey, I'm Orton Bright and I love building beautiful Websites</h2>
          <NavLink to={"/about"}>about me</NavLink>
        </div>
      </section>
    </main>
  );
};

export default Hero;
