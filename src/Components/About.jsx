import bright from "../assets/images/kobe.webp";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section className="mobile md:tablet xl:desktop lg:grid grid-cols-2">
      <picture>
        <img src={bright} type="image/webp" alt="A picture of Bright Orton" className="h-[34.6rem] md:h-[60rem] w-full lg:w-[54rem] object-cover" />
      </picture>
      <div className="mt-[3.2rem] xl:mt-0 lg:pl-[5.5rem] xl:pl-[12.5rem]  text-justify ">
        <div className="border-y-[1px] py-[3.2rem] ">
          <h2 className="capitalize ">about me</h2>
          <p className="text-[1.6rem] leading-[3rem] my-[2rem]">
            Hey there! I&apos;m a budding front-end developer on the lookout for an
            exhilarating opportunity in the tech realm. My forte lies in crafting
            HTML that&apos;s accessible to everyone, harnessing the latest CSS
            techniques, and weaving pristine JavaScript code. My JavaScript
            expertise primarily orbits around React, but I&apos;m all about
            versatility—ready to embrace any tool that the job demands. While
            rooted in Accra, Ghana, I thrive in remote work setups, seasoned with
            a solid background in collaborative remote teams. Beyond the screen,
            you&apos;ll catch me reveling in the great outdoors. Whether it&apos;s
            strolling, jogging, or pedaling through nature&apos;s wonders, count me in!
            Curious about my work? I&apos;d be thrilled for you to take a peek.
          </p>
          <NavLink to={'/portfolio'} className={` border-primaryGreyishBlue hover:bg-primaryGreyishBlue hover:text-white btnDefault`} >
            go to portfolio
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default About;
