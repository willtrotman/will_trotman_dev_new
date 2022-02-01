import classes from "./Modal.module.scss";

export function Modal({
  closeModal,
  title,
  image,
  description,
  link,
  linkText,
  languages,
}) {
  return (
    <div className={classes.modalBackdrop}>
      <div className={classes.modal}>
        <button onClick={closeModal} className={classes.exitButton}>
          X
        </button>
        <div className={classes.modalHeader}>
          <h1 className={classes.headingL}>{title}</h1>
        </div>
        <div className={classes.modalBody}>
          <div className={classes.modalBodyLeft}>
            <img alt={title} className={classes.modalImage} src={image} />
          </div>
          <div className={classes.modalBodyRight}>
            <p>{description}</p>
            <a className={classes.link} href={link} target="blank">
              {linkText}
            </a>
          </div>
        </div>
        <div className={classes.modalFooter}>
          <h3 className={classes.heading} id={classes.modalFooterText}>
            {languages}
          </h3>
        </div>
      </div>
    </div>
  );
}
