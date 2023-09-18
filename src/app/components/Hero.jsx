"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";

const Hero = () => {
  const [bgClass, setBgClass] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgClass(styles["hero-mobile"]);
      } else {
        setBgClass(styles["hero-large"]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`${styles.hero} ${bgClass}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles["inner-container"]}>
            <div className={styles.headings}>
              <h1>Watch your favorite content with hbomax teleparty</h1>
            </div>
            <div className={styles.text}>
              <p>
                In Watch party extension you can explore a wide range of content
                in HBO Max. You can watch them all with your family and friends.
                The best part is you can even invite to watch hbo max with
                friends. With its, amazing features you can chat or do
                audio/video calls while having your showtime. Save your fun
                memories and share the excitement of watching shows together.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
