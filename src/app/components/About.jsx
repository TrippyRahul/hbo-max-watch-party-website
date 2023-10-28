import React from "react";
import styles from "../styles/about.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.headings}>
              <h2>About HBO Max watch party</h2>
            </div>
            <div className={styles.desc}>
              <p>
                It is an extension that allows it’s valid subscribers to view
                movies and TV shows together in real time with friends and
                family. It enables synchronized playback, so everyone in the
                party sees the same scenes simultaneously. Users can also
                interact through a built-in hbomax chat feature and can also
                make audio and video calls while streaming a series, adding to
                the social experience. The Party feature enhances the enjoyment
                of streaming by creating a shared viewing experience, even when
                viewers are in different locations. The best part is that you
                can group watch hbo max.
              </p>
              <p>
                To use this extension, make sure you have an active
                subscription. It has features including chat, audio, and video
                calls. So, select your favorite content and start enjoying the
                fun of synchronized streaming with your friends and family.
              </p>
              <p>
                In comparison to teleparty extension, it has the best features
                to have a wonderful viewing experience.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="/about.svg"
                alt="about"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
