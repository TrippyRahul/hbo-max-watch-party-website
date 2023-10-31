import React from "react";
import styles from "../styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles["image-container"]}>
              <Image
                src="/favorite.svg"
                alt="favorite"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>HD Time Sync</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  It is a very simple and quick process, it’s just you need to
                  log in and activate it. You can also invite your friends and
                  family to it. With this browser extension, you can watch
                  movies and series together and share all your moments at the
                  same time. You can even make a call while watching a movie.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles["bottom-left"]}>
            <div className={styles.headings}>
              <h2>Explore the variety of shows on HBO Max</h2>
            </div>
            <div className={styles.desc}>
              <p>
                In this extension, you can explore different varieties of TV
                shows, movies, and series. It has exciting features including
                chat, audio, and video calls. So, unite with your friends and
                family and watch your favorite shows with them. While watching a
                series, you can create your own watching room and share your
                feelings from your comfort zone.
              </p>
            </div>
          </div>
          <div className={styles["bottom-right"]}>
            <div className={styles["image-container"]}>
              <Image
                src="/customize.svg"
                alt="customize"
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

export default Favorite;
