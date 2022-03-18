import style from "./languageTable.module.css";
import React, { useState } from "react";
import InfoComponent from "../infoComponent/infoComponent.js";

export default function LanguageTableComponent({ arrayProps }) {
  const [infoTitle, setInfoTitle] = useState("title");
  const [infoImg, setInfoImg] = useState([""]);
  const [infoExamples, setInfoExamples] = useState(["", "", ""]);
  const [japLetter, setJapLetter] = useState([""]);
  const [latLetter, setLatLetter] = useState("");

  const infoComponentId = "infoComponent";

  const showInfo = (letter) => {
    if (letter.lat == "") return;
    let title = letter.jap + " " + letter.lat;
    setInfoTitle(title);
    setInfoImg(letter.infoImg);
    setInfoExamples(letter.examples);
    setJapLetter(letter.jap);
    setLatLetter(letter.lat);
    document
      .getElementById("infoComponent")
      .classList.add("infoComponent_scaleUp__ilu5D");
  };

  if (arrayProps?.length > 0) {
    return (
      <div className={style.charactersGrid}>
        {arrayProps?.map((letter, index) => {
          return (
            <button
              key={"letter" + letter.jap + letter.lat + index}
              onClick={() => showInfo(letter)}
              className={
                index % 10 >= 5
                  ? `${style.characterContainer}`
                  : `${style.characterContainer} ${style.backgroundGrey}`
              }
            >
              <div
                key={"letterjap" + letter.jap + index}
                className={style.letterJap}
              >
                {letter.jap}
              </div>
              <div
                key={"letterLat" + letter.lat + index}
                className={style.letterLat}
              >
                {letter.lat}
              </div>
            </button>
          );
        })}
        <InfoComponent
          id={infoComponentId}
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
    return <p>Undefined</p>;
  }
}
