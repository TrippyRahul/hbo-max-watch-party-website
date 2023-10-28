import React from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>Watch your favorite content with hbomax teleparty</h1>
            <p>
              In Watch party extension you can explore a wide range of content
              in HBO Max. You can watch them all with your family and friends.
              The best part is you can even invite to watch hbo max with
              friends. With its, amazing features you can chat or do audio/video
              calls while having your showtime. Save your fun memories and share
              the excitement of watching shows together.
            </p>
            <Button />
          </div>
          <div className={styles.right}>
            <div className={styles[`image-container`]}>
              <Image
                src={`/hero-img.svg`}
                alt="hero-img"
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
