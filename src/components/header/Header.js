import classes from "./Header.module.scss";

export function Header({ isToggled }) {
  return (
    <header>
      <h1 className={isToggled ? classes.headingXlRetro : classes.headingXl}>
        Will Trotman
      </h1>
    </header>
  );
}
