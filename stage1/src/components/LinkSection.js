import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./LinkSection.module.css";

function LinkSection() {
  return (
    <Fragment>
      <ul>
        <a href="https://twitter.com/itsaikins" className={styles.buttons}>
          Twitter Link
        </a>
        <a
          id="btn_zuri"
          className={styles.buttons}
          href="https://training.zuri.team/"
        >
          Zuri Team
        </a>
        <a id="books" className={styles.buttons} href="https://books.zuri.team">
          Zuri Books
        </a>
        <a
          id="book__python"
          className={styles.buttons}
          href="https://books.zuri.team"
        >
          Python Books
        </a>
        <a
          id="pitch"
          className={styles.buttons}
          href="https://background.zuri.team"
        >
          Backgroud Check for Coders
        </a>
        <a
          id="book__design"
          className={styles.buttons}
          href="https://books.zuri.team/design-rules"
        >
          Design Books
        </a>

        <Link id="contact" className={styles.buttons} to="/contact">
          Contact Me
        </Link>
      </ul>
    </Fragment>
  );
}

export default LinkSection;
