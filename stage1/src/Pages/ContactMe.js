import React, { Fragment } from "react";
import Footer from "../components/Footer";
import styles from "./ContactMe.module.css";

function ContactMe() {
  return (
    <Fragment>
      <form className={styles.contactMe}>
        <h1 className={styles.contactMeHeading}>Contact Me</h1>

        <p className={styles.contactMeParagraph}>
          Hi there, contact me to ask me about anything you have in mind
        </p>
        <label htmlFor="firstname" className={styles.firstnameLabel}>
          First name
          <input
            type="text"
            id="first_name"
            name="firstname"
            className={styles.firstname}
            placeholder="Enter your first name"
          />
        </label>

        <label htmlFor="lastname" className={styles.lastnameLabel}>
          Last name
          <input
            type="text"
            id="last_name"
            name="lastname"
            className={styles.lastname}
            placeholder="Enter your last name"
          />
        </label>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="yourname@email.com"
        />

        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          className={styles.messageInput}
          placeholder="Send me a message and I'll reply you as soon as possible"
        />

        <label htmlFor="consentBox" className={styles.consentBoxLabel}>
          <input
            type="checkbox"
            id="consentBox"
            className={styles.consentBox}
            name="consentBox"
          />
          You agree to providing your data to Aikins Akenten who may contact you
        </label>

        <button
          id="btn__submit"
          type="submit"
          className={styles.sendMessageButton}
        >
          Send messagee
        </button>
      </form>

      <Footer />
    </Fragment>
  );
}

export default ContactMe;
