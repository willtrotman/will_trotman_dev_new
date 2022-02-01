import classes from "./Main.module.scss";
import { Work } from "../work/Work";

export function Main({ isToggled }) {
  return <main className={classes.main}>{<Work isToggled={isToggled} />}</main>;
}
