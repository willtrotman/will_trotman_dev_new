import classes from "./Work.module.scss";
import { useState } from "react";
import { Modal } from "./modal/Modal";
import { websites } from "../../Data";

export function Work({ isToggled }) {
  // Modal State
  const [modalOpen, setModalOpen] = useState(null);
  // Close modal function
  const closeModal = () => {
    setModalOpen(null);
  };
  // Open modal function
  const openModal = (index) => {
    setModalOpen(index);
  };
  return (
    <section id="work">
      <h1 className={isToggled ? classes.headingLRetro : classes.headingL}>
        Experience
      </h1>
      <div className={classes.workWrapper}>
        {websites.map((site, index) => {
          return (
            <div key={index}>
              <div
                className={classes.panel}
                alt={site.title}
                onClick={() => {
                  openModal(index);
                }}
              >
                <h2 className={classes.panelTitle}>{site.title}</h2>
              </div>
              {modalOpen === index ? (
                <Modal
                  index={index}
                  title={site.title}
                  description={site.description}
                  languages={site.languages}
                  link={site.link}
                  linkText={site.linkText}
                  image={site.image}
                  closeModal={closeModal}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
