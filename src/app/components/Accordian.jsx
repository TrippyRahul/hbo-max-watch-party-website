"use client";

import React, { useState } from "react";
import styles from "../styles/accordian.module.scss";
import Button from "../components/Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "Does hbo max have watch party?",
    ans: "Yes, it has a party.",
  },
  {
    id: 2,
    ques: "Can you screen share hbo max? ",
    ans: "Yes, while using this tool you can hbo max screen share with your close ones.",
  },
  {
    id: 3,
    ques: "How to screenshare hbo max?",
    ans: "To screen share, download the extension on your web browser. ",
  },
  {
    id: 4,
    ques: "How to watch party hbo Max? ",
    ans: "Install the extension on your browser. Here, you will get a watch party feature to join and enjoy synchronized playback and chat or you can even make an audio and video call while watching movies or shows together in real time. It’s just you need to have your valid account to start the process. ",
  },
  {
    id: 5,
    ques: "How to watch hbo max together?",
    ans: "To watch it together, use the Watch Party feature on the platform, invite friends or family to join, and enjoy synchronized viewing and chat for a shared streaming experience.",
  },
];

const Accordian = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
    } else {
      setShowAnswer(questionId);
    }
  };

  return (
    <div className={styles.accordian}>
      <div className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTION</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles["image-container"]}>
                  <Image
                    src="./addLogo.svg"
                    alt="add-logo"
                    fill={true}
                    className={styles.image}
                  />
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}

              {/*
               */}
            </li>
          ))}
        </ol>
        <Button />
      </div>
    </div>
  );
};

export default Accordian;
