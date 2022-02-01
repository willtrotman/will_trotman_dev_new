import classes from "./About.module.scss";

export function About({ isToggled }) {
  return (
    <div className={classes.aboutContainer}>
      <h2 className={isToggled ? classes.headingLRetro : classes.headingL}>
        Front End Developer
      </h2>
      <p className={classes.about}>
        Welcome to my portfolio! I'm a musician who found a passion for coding
        on his journey to pay rent. I spend most of my time working in React.
      </p>
      {/* <div className={classes.email}>willtrotman336@gmail.com</div> */}
    </div>
  );
}
