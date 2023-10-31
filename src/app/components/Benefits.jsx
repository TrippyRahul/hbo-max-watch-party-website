import React from "react";
import styles from "../styles/benefits.module.scss";
import Button from "./Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits} id="features">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.headings}>
              <h2>Enjoy yourself in endless streaming</h2>
            </div>
            <div className={styles.desc}>
              <p>
                You can explore endless movies and series from multiple OTT
                platforms. With this extension, have the best time together.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles["image-container"]}>
            <Image
              src="/benefits.svg"
              alt="benefits"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
