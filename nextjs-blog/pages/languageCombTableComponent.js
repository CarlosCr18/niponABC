import style from "./languageCombTable.module.css";
import React, { useState } from "react";
import InfoComponent from "./infoComponent.js";

export default function LanguageTableComb({ arrayProps }) {
  const [infoTitle, setInfoTitle] = useState("title");
  const [infoImg, setInfoImg] = useState("/images/info.png");
  const [infoExamples, setInfoExamples] = useState([
    "/images/example1.png",
    "/images/example2.png",
    "/images/example3.png",
  ]);

  const infoComponentId = "infoComponentComb";

  const showInfo = (letter) => {
    if (letter.lat == " ") return;
    let title = letter.jap + " " + letter.lat;
    setInfoTitle(title);
    document
      .getElementById("infoComponentComb")
      .classList.add("infoComponent_scaleUp__lIcPE");
  };
  return (
    <div className={style.charactersCombGrid}>
      {arrayProps.map((letter, index) => {
        return (
          <button
            key={"letterComb" + letter.jap + letter.lat}
            onClick={() => showInfo(letter)}
            className={
              index % 6 >= 3
                ? `${style.characterContainer}`
                : `${style.characterContainer} ${style.backgroundBlue}`
            }
          >
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
        id={infoComponentId}
        title={infoTitle}
        image={infoImg}
        sound="sound"
        examples={infoExamples}
      />
    </div>
  );
}
