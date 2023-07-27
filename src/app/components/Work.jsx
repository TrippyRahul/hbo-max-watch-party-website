import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <>
      <div className={styles.work} id="how-it-works">
        <div className={styles.container}>
          <h2 id="work">How does this extension work?</h2>

          <p>
            This extension works by enhancing your streaming experience. It’s
            just you have to install the extension and after installing it, you
            can customize your user icon and invite your dear ones to start a
            party. While streaming a movie, you can chat and have audio and
            video calls. The best part is you can also enjoy synchronized
            streaming of shows and movies from various platforms with your
            family and friends. It also provides high-quality streaming and a
            seamless way to enjoy content together from the comfort of your own
            space.
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
