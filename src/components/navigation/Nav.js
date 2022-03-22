import { useState, useEffect } from "react";
import classes from "./Nav.module.scss";
// import { Switch } from "../../switch/Switch";
import { Switch } from "../switch/Switch";

export function Nav({ isToggled, setIsToggled }) {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    const st = window.pageYOffset;
    if (st > lastScrollTop && lastScrollTop > 0) {
      setShow(false);
    } else setShow(true);
    setLastScrollTop(st);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });
  return (
    <nav className={!show ? classes.hidden : undefined}>
      <ul className={classes.navlist}>
        <li className={classes.heading} key="Resume">
          <a href="./images/Resume.pdf" target="blank">
            Resume
          </a>
        </li>
        <li className={classes.heading} key="GitHub">
          <a href="https://github.com/willtrotman" target="blank">
            GitHub
          </a>
        </li>
        {/* <li className={classes.heading} key="LinkedIn">
          <a href="#" target="blank">
            LinkedIn
          </a>
        </li> */}
        <li className={classes.heading} key="Contact">
          <a href="mailto: willtrotman336@gmail.com" target="blank">
            Contact
          </a>
        </li>
        <li id={classes.switchItem}>
          <Switch
            isToggled={isToggled}
            toggleRetro={() => {
              setIsToggled(!isToggled);
            }}
          />
        </li>
      </ul>
    </nav>
  );
}
