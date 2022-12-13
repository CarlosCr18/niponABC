import style from "./languageTable.module.css";
import React, { useEffect, useRef, useState } from "react";
import InfoComponent from "../infoComponent/infoComponent.js";

export default function LanguageTableComponent({ arrayProps }) {
  const [infoTitle, setInfoTitle] = useState("title");
  const [infoImg, setInfoImg] = useState([""]);
  const [infoExamples, setInfoExamples] = useState(["", "", ""]);
  const [japLetter, setJapLetter] = useState([""]);
  const [latLetter, setLatLetter] = useState("");
  const [filteredArray, setFilteredArray] = useState(arrayProps ? [...arrayProps] : []);
  const infoComponent = useRef();
  const spaces = [61, 63, 71, 72, 73, 76, 77, 78, 79];

  useEffect(() => {
    if(arrayProps.length===71){
    let tempArray = [...filteredArray];
    spaces.forEach((e) => {
      tempArray.splice(e, 0, "");
    });
    setFilteredArray(tempArray);
  }else{
    setFilteredArray(arrayProps)
  }
 }, [arrayProps]);

  const showInfo = (letter) => {
    if (letter.lat == "") return;
    let title = letter.jap + " " + letter.lat;
    setInfoTitle(title);
    setInfoImg(letter.infoImg);
    setInfoExamples(letter.examples);
    setJapLetter(letter.jap);
    setLatLetter(letter.lat);
    infoComponent.current.classList.add(`${style.showModal}`);
    console.log(infoComponent.current)
  };

  const closeModal = (letter) => {
    infoComponent.current.classList.remove(`${style.showModal}`);
  };
  if (filteredArray?.length > 0) {
    return (
      <div className={style.charactersGrid}>
        {filteredArray?.map((letter, index) => {
          if (letter) {
            return (
              <button
                key={"letter" + letter.jap + letter.lat + index}
                onClick={() => showInfo(letter)}
                className={
                  index % 10 >= 5
                    ? `${style.characterContainer}`
                    : `${style.characterContainer} ${style.backgroundGrey}`
                }>
                <div key={"letterjap" + letter.jap + index} className={style.letterJap}>
                  {letter.jap}
                </div>
                <div key={"letterLat" + letter.lat + index} className={style.letterLat}>
                  {letter.lat}
                </div>
              </button>
            );
          } else {
            return (
              <div
                key={"empty_" + index}
                className={
                  index % 10 >= 5
                    ? `${style.characterContainer}`
                    : `${style.characterContainer} ${style.backgroundGrey}`
                }></div>
            );
          }
        })}
        <InfoComponent
          closeModal={closeModal}
          refID={infoComponent}
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
