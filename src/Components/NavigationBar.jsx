import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen((open) => !open);
  };

  return (
    <nav className={`mobile md:tablet lg:desktop relative md:static`}>
      <div className="flex justify-between items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
          <path
            fill="#33323D"
            fillRule="evenodd"
            d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
          />
        </svg>

        <section
          className={`${
            open
              ? "max-md:small"
              : "hidden"
          }     hidden md:flex md:justify-between md:gap-[4.2rem] uppercase text-[1.2rem] tracking-[2px]`}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            home
          </NavLink>
          <NavLink
            to={"/portfolio"}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            portfolio
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            contact me
          </NavLink>
        </section>
        <button
          className={`md:hidden flex flex-col ${
            open ? "gap-[0px]" : "gap-[4px]"
          }`}
          onClick={handleOpenMenu}
        >
          <span
            className={`w-[3rem] h-[1px] bg-black inline-block ${
              open ? "rotate-45" : "translate-y-0"
            } anim`}
          ></span>
          <span
            className={`w-[3rem] h-[1px] bg-black  anim ${
              open ? "translate-x-[-10px] opacity-0 " : "inline-block"
            } `}
          ></span>
          <span
            className={`w-[3rem] h-[1px] bg-black inline-block ${
              open ? "-rotate-45" : "translate-y-0"
            } anim`}
          ></span>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
