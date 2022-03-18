import App, { Container } from "next/app";
import AppContext from "../AppContext";
import { useState, useEffect } from "react";
import { hiraganaData } from "../languageDatabase.js";
import { hiraganaCombinationsData } from "../languageDatabase.js";
import { katakanaData } from "../languageDatabase.js";
import { katakanaCombinationsData } from "../languageDatabase.js";

function MyApp({ Component, pageProps }) {
  const [value, setValue] = useState(["", "", "", ""]);

  useEffect(() => {
    fetch("https://japanese-alphabet-api.herokuapp.com/api/all", {
      method: "GET",
    })
      .then((response) => response.json())
      .then(function (json) {
        let tempFullCharacterList = [];
        for (const key in json) {
          tempFullCharacterList.push(json[key]);
        }
        tempFullCharacterList.forEach((alphabet, index) => {
          alphabet.content.forEach((element, elementIndex) => {
            element.jap = element.japanese;
            element.lat = element.romaji;
            element.examples.forEach((example) => {
              example.lat = example.romaji;
              example.jap = example.japanese;
            });
            switch (index) {
              case 2:
                element.infoImg = hiraganaData[elementIndex].infoImg;
                break;
              case 0:
                element.infoImg =
                  hiraganaCombinationsData[elementIndex].infoImg;
                break;
              case 3:
                element.infoImg = katakanaData[elementIndex].infoImg;
                break;
              case 1:
                element.infoImg =
                  katakanaCombinationsData[elementIndex].infoImg;
                break;
            }
          });
        });

        setValue([
          tempFullCharacterList[2].content,
          tempFullCharacterList[0].content,
          tempFullCharacterList[3].content,
          tempFullCharacterList[1].content,
        ]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <AppContext.Provider value={value}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
