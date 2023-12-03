import { NavLink } from "react-router-dom";


const SubFooter = () => {
  return (
    <section className="mobile md:tablet xl:desktop md:flex flex-col justify-center md:flex-row md:justify-between md:items-center xl:space-x-[3.2rem] lg:space-x-[2.2rem] md:space-x-[1rem]">
      <h2 className="md:w-[40%] ">Interested in doing a project together?</h2>
      <span className="md:w-[30%] h-[1px] bg-[#979797] hidden md:inline-block">
        
      </span>
    <NavLink to={'/contact'} className={`btnDefault border-primaryGreyishBlue hover:bg-primaryGreyishBlue hover:text-white`}>
        contact me
    </NavLink>
    </section>
  );
};

export default SubFooter;
