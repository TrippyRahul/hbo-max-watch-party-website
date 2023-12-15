import React from "react";
import styles from "../styles/button.module.scss";

const Button = () => {
  return (
    <a
      href="https://chromewebstore.google.com/detail/hbo-watch-party/ojkhlfmofplghgodaihagbdhohmanmcb?hl=en&pli=1"
      target="_blank"
    >
      <button className={styles.btn}>Add to Chrome</button>
    </a>
  );
};

export default Button;
