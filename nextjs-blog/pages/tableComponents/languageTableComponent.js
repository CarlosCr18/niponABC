import style from "./languageTable.module.css";
import React, { useState } from "react";
import InfoComponent from "../infoComponent/infoComponent.js";

export default function LanguageTableComponent({ arrayProps }) {
  const [infoTitle, setInfoTitle] = useState("title");
  const [infoImg, setInfoImg] = useState("/images/info.png");
  const [infoExamples, setInfoExamples] = useState([
    "/images/example1.png",
    "/images/example2.png",
    "/images/example3.png",
  ]);

  const infoComponentId = "infoComponent";

  const showInfo = (letter) => {
    if (letter.lat == " ") return;
    let title = letter.jap + " " + letter.lat;
    setInfoTitle(title);
    document
      .getElementById("infoComponent")
      .classList.add("infoComponent_scaleUp__ilu5D");
  };

  return (
    <div className={style.charactersGrid}>
      {arrayProps.map((letter, index) => {
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
      />
    </div>
  );
}
