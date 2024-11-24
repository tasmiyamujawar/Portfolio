import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,<br /> I'm Tasmiya Mujawar</h1>
        <p className={styles.description}>
          Front End Developer / Full Stack Developer
        </p>
        <a href="mailto:tasmiya0019@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/tasmiyaphoto.png")}
        alt="Hero image of me"
        className={styles.tasmiyaphoto}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
