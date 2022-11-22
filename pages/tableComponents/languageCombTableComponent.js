import style from "./languageCombTable.module.css";
import React, { useState, useRef } from "react";
import InfoComponent from "../infoComponent/infoComponent.js";

export default function LanguageTableComb({ arrayProps }) {
  const [infoTitle, setInfoTitle] = useState("title");
  const [infoImg, setInfoImg] = useState("");
  const [infoExamples, setInfoExamples] = useState(["", "", ""]);
  const [japLetter, setJapLetter] = useState("");
  const [latLetter, setLatLetter] = useState("");
  const infoComponentComb = useRef();

  const showInfo = (letter) => {
    if (letter.lat == " ") return;

    let title = letter.lat;
    setInfoTitle(title);
    setInfoImg(letter.infoImg);
    setInfoExamples(letter.examples);
    setJapLetter(letter.jap);
    setLatLetter(letter.lat);

    infoComponentComb.current.classList.add(`${style.showModal}`);
  };
  const closeModal = () =>{
    infoComponentComb.current.classList.remove(`${style.showModal}`);
  }

  if (arrayProps?.length > 0) {
    return (
      <div className={style.charactersCombGrid}>
        {arrayProps?.map((letter, index) => {
          return (
            <button
              key={"letterComb" + letter.jap + letter.lat}
              onClick={() => showInfo(letter)}
              className={
                index % 6 >= 3 ? `${style.characterContainer}` : `${style.characterContainer} ${style.backgroundBlue}`
              }>
              <div key={"letterjapComb" + letter.jap} className={style.letterJap}>
                {letter.jap}
              </div>
              <div key={"letterLatComb" + letter.lat} className={style.letterLat}>
                {letter.lat}
              </div>
            </button>
          );
        })}
        <InfoComponent
          closeModal={closeModal}
          refID={infoComponentComb}
          title={infoTitle}
          image={infoImg}
          sound="sound"
          examples={infoExamples}
          japLetter={japLetter}
          latLetter={latLetter}
        />
      </div>
    );
  } else {
    return <p>undefined</p>;
  }
}
