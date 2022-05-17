import classes from "./About.module.scss";

export function About({ isToggled }) {
  return (
    <div className={classes.aboutContainer}>
      <h2 className={isToggled ? classes.headingLRetro : classes.headingL}>
        Front End Developer
      </h2>
      <p className={classes.about}>
        Welcome to my portfolio! I'm a musician gone web developer, who
        primarily works in React. I enjoy writing clean, reusable code and
        designing smooth user interfaces.
      </p>
      {/* <div className={classes.email}>willtrotman336@gmail.com</div> */}
    </div>
  );
}
