import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <>
      <div className={styles.work} id="how-it-works">
        <div className={styles.container}>
          <h2 id="work">How does it work?</h2>

          <p>
            This is an amazing tool for uninterrupted binge watch. It’s just you
            have to download and install the extension. You can customize your
            user icon and invite your dear ones to start the party. While
            streaming a movie, you can chat or do audio/ video calls. The fun
            part is you can also enjoy synchronized streaming of shows and
            movies from which you can watch with your family and friends. It
            also provides high-quality streaming and a seamless way to enjoy
            content together from the comfort of your own space.
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
