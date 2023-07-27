import React from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles["inner-container"]}>
              <div className={styles.headings}>
                <h1>
                  Have a great time watching your favorite content with hbomax
                  teleparty
                </h1>
              </div>
              <div className={styles.text}>
                <p>
                  With this watch party extension, you can experience a lot of
                  joy while enjoying your favorite content. You&apos;ll find a
                  wide selection of movies, series, and TV shows to view with
                  your family and friends. It&apos;s even better because you can
                  invite your loved ones to join you in streaming watch hbo max
                  with friends The best part is that you can chat and make audio
                  and video calls while streaming. This extension allows you to
                  create fun memories and share the excitement of viewing a
                  series together, even if you are far away from each other.
                </p>
              </div>
              <div className={styles.btn}>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
