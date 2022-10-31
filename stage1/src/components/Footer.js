import React, { Fragment } from "react";
import styles from "./Footer.module.css";
import zuri from "../Images/zuriInternship.png";
import I4G from "../Images/I4G.png";

function Footer() {
  return (
    <Fragment>
      <footer className={styles.footer}>
        <img className={styles.footerImage} src={zuri} />
        <p className={styles.footerParagraph}>HNG Internship 9 Frontend Task</p>
        <img className={styles.footerImage} src={I4G} />
      </footer>
    </Fragment>
  );
}

export default Footer;
