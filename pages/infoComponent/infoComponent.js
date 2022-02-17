import React from "react";
import Link from "next/link";
import style from "./infoComponent.module.css";

export default function InfoComponent({
  id,
  title,
  image,
  sound,
  examples,
  japLetter,
  characterSet,
}) {
  const playSound = () => {
    const sound = document.getElementById("audio");
    sound.currentTime = 0;
    sound.playSound();
  };

  let imageArray = image?.length > 0 ? [...image] : [image];
  let examplesArray = examples?.length > 0 ? [...examples] : [examples];

  return (
    <div className={`${style.infoContainer}`} id={id}>
      <button
        className={style.btnClose}
        onClick={({ target }) => {
          target.parentElement.classList.remove(`${style.scaleUp}`);
        }}
      >
        X
      </button>
      <h3 className={style.title}>{title}</h3>

      <div className={style.imgContainer}>
        {imageArray?.map((img, i) => (
          <img
            key={img + i + "key"}
            loading="lazy"
            className={style.imageLanguages}
            src={img}
            alt="picture of selected item"
          />
        ))}
      </div>
      <button
        className={style.btnSound}
        onClick={() => {
          playSound;
        }}
      >
        Sound Icon
      </button>
      <audio id="audio" src={sound} />
      <h3>Examples</h3>
      <div className={style.examplesContainer}>
        {examples?.map((e, index) => {
          let colorChar =
            index !== 1
              ? `${style.examples}`
              : `${style.examples} ${style.exampleColorRed}`;
          let regex = new RegExp(japLetter, "g");
          let returnString = ("" + e.jap).replace(
            regex,
            `<span>${japLetter}</span>`
          );
          // console.log(returnString);
          return (
            <div key={"colorChar" + colorChar + index} className={colorChar}>
              <p
                className={style.example}
                dangerouslySetInnerHTML={{ __html: returnString }}
              ></p>
              <p className={style.example}>{e.lat}</p>
              <p className={style.example}>{e.meaning}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
