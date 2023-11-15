import { NavLink } from "react-router-dom";
import styles from "../Styles";
const NavigationBar = () => {
  return (
    <nav className={`mobile md:tablet lg:desktop`}>
      <div>
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
            <path
              fill="#33323D"
              fillRule="evenodd"
              d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
            />
          </svg>
        </a>
        <section>
            <NavLink>home</NavLink>
            <NavLink>portfolio</NavLink>
            <NavLink>contact me</NavLink>
        </section>
      </div>
    </nav>
  );
};

export default NavigationBar;
