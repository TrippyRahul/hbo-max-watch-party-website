import React from "react";
import styles from "../styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>HD Time Sync</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  To have an amazing time on it, you simply need to log in and
                  invite your best buddy. Use this extension to see shows and
                  movies together. You can also chat and audio and video calls
                  while streaming your favorite content. While having your
                  showtime on max, enjoy fast buffering and HD video quality on
                  your desktop.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./favorite.svg"
                alt="favorite"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles["bottom-left"]}>
            <div className={styles.bg}>
              <div className={styles["bg-image-container"]}>
                <Image
                  src="./customize-bg.svg"
                  alt="customize-bg"
                  fill={true}
                  className={styles["bg-image"]}
                />
              </div>
            </div>
            <div className={styles["image-container"]}>
              <Image
                src="./customize.svg"
                alt="customize"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles["bottom-right"]}>
            <div className={styles.headings}>
              <h2>Customize and enjoy your favorite shows on HBO Max</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Personalize your party using this extension and choose a unique
                user icon and access exciting features like chat, audio calls,
                and video calls. Gather your loved ones and stream your favorite
                movies from various OTT platforms in high quality. Share
                laughter, tears, and cheers together from the comfort of your
                own space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
