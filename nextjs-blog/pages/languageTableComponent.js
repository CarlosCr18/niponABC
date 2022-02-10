import style from "./languageTable.module.css";
import React, { useState } from "react";
import InfoComponent from "./infoComponent.js";

export default function LanguageTableComponent({ arrayProps }) {
  const [infoTitle, setInfoTitle] = useState("title");
  const showInfo = (letter) => {
    if (letter.lat == " ") return;
    console.log(letter.lat, letter.jap);
    let lat = letter.lat;
    let jap = letter.jap;
    setInfoTitle(jap + "ㅤ" + lat);
    document.getElementById("infoComponent").style.display = "flex";
  };

  return (
    <div className={style.charactersGrid}>
      {arrayProps.map((letter, index) => {
        return (
          <button
            key={letter.lat + index}
            onClick={() => showInfo(letter)}
            className={
              index % 10 >= 5
                ? `${style.characterContainer}`
                : `${style.characterContainer} ${style.backgroundGrey}`
            }
          >
            <div key={letter.jap + index} className={style.letterJap}>
              {letter.jap}
            </div>
            <div
              key={letter.lat + letter.jap + index}
              className={style.letterLat}
            >
              {letter.lat}
            </div>
          </button>
        );
      })}
      <InfoComponent
        id="infoComponent"
        title={infoTitle}
        image={"image"}
        sound="sound"
        examples={["one", "two", "three"]}
      />
    </div>
  );
}
