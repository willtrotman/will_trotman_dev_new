import classes from "./Contact.module.scss";
import { useState, useRef, useEffect } from "react";

export const Contact = ({ isToggled }) => {
  // State

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    hiddenButton.current.click();
    setFirst("");
    setLast("");
    setSubject("");
    setBody("");
  };

  // Ref
  const hiddenButton = useRef();

  const mailTo = `mailto:willtrotman336@gmail.com?subject=${subject}&body=${body}`;

  return (
    <div className={isToggled ? classes.contactRetro : classes.contact}>
      <h2 className={isToggled ? classes.headingLRetro : classes.headingL}>
        Contact
      </h2>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={isToggled ? classes.contactFormRetro : classes.contactForm}
      >
        {/* First Name */}
        <label for="first">First Name</label>
        <input
          value={first}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
          type="text"
          id={classes.first}
          name="firstname"
          placeholder="First Name"
        />
        {/* Last Name */}
        <label for="last">Last Name</label>
        <input
          value={last}
          onChange={(e) => {
            setLast(e.target.value);
          }}
          type="text"
          id={classes.last}
          name="lastname"
          placeholder="Last Name"
        />
        {/* Subject */}
        <label for="subject">Subject</label>
        <input
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          type="text"
          id={classes.subject}
          name="subjectfield"
          placeholder="Subject"
        />
        {/* Message */}
        <label for="message">Your Message</label>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          id={classes.message}
          name="messagefield"
          placeholder="Your Message"
        />

        {/* Submit */}
        <input
          type="submit"
          value="Submit"
          id={isToggled ? classes.submitRetro : classes.submit}
        />
        <a ref={hiddenButton} className={classes.mailTo} href={mailTo}>
          {" "}
        </a>
      </form>
    </div>
  );
};
