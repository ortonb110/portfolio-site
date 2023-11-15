import { NavLink } from "react-router-dom";
const NavigationBar = () => {
  return (
    <nav className={`mobile md:tablet lg:desktop`}>
      <div className="flex justify-between items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
          <path
            fill="#33323D"
            fillRule="evenodd"
            d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
          />
        </svg>

        <section className="hidden md:flex md:justify-between  md:gap-[4.2rem] uppercase text-[1.2rem] tracking-[2px]">
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
        <button className="md:hidden">menu</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
