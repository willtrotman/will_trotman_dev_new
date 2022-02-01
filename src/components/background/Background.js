import classes from "./Background.module.scss";

export function Background({ isToggled }) {
  return (
    <div
      className={
        isToggled ? classes.backgroundDesignRetro : classes.backgroundDesign
      }
    >
      <div className={classes.topLeft}></div>
      <div className={classes.topRight}></div>
    </div>
  );
}
