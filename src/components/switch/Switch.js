import classes from "./Switch.module.scss";

export function Switch({ toggleRetro, isToggled, isPlaying, setIsPlaying }) {
  const handleSwitch = () => {
    if (isToggled && isPlaying) {
      setIsPlaying(false);
      toggleRetro();
    } else {
      toggleRetro();
    }
  };
  return (
    <label className={classes.switch}>
      <input type="checkbox" onClick={handleSwitch} />
      <span className={classes.slider} />
    </label>
  );
}
