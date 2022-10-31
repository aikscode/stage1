import React from "react";
import github from "../Images/github.png";
import slack from "../Images/slack.png";
import styles from "./SocialSection.module.css";

function SocialSection() {
  return (
    <ul className={styles.socialSection}>
      <a>
        <img src={github} />
      </a>
      <a>
        <img src={slack} />
      </a>
    </ul>
  );
}

export default SocialSection;
