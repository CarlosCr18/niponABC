import style from "./game.module.css";
import React, { useState, useEffect } from "react";
import Table from "../tableComponents/languageTableComponent.js";
import GameDescription from "./gameDescription.js";
import GameCheckBox from "./gameCheckBoxOption.js";
import GameButtons from "./gameButtons.js";
import NavBar from "../navigationBar/navigationBar";
import Head from "next/head";

const hiragana = [
  { jap: "あ", lat: "a" },
  { jap: "い", lat: "i" },
  { jap: "う", lat: "u" },
  { jap: "え", lat: "e" },
  { jap: "お", lat: "o" },
  { jap: "か", lat: "ka" },
  { jap: "き", lat: "ki" },
  { jap: "く", lat: "ku" },
  { jap: "け", lat: "ke" },
  { jap: "こ", lat: "ko" },
  { jap: "が", lat: "ga" },
  { jap: "ぎ", lat: "gi" },
  { jap: "ぐ", lat: "gu" },
  { jap: "げ", lat: "ge" },
  { jap: "ご", lat: "go" },
  { jap: "さ", lat: "sa" },
  { jap: "し", lat: "shi" },
  { jap: "す", lat: "su" },
  { jap: "せ", lat: "se" },
  { jap: "そ", lat: "so" },
  { jap: "ざ", lat: "za" },
  { jap: "じ", lat: "ji" },
  { jap: "ず", lat: "zu" },
  { jap: "ぜ", lat: "ze" },
  { jap: "ぞ", lat: "zo" },
  { jap: "た", lat: "ta" },
  { jap: "ち", lat: "chi" },
  { jap: "つ", lat: "tsu" },
  { jap: "て", lat: "te" },
  { jap: "と", lat: "to" },
  { jap: "だ", lat: "da" },
  { jap: "ぢ", lat: "ji" },
  { jap: "づ", lat: "zu" },
  { jap: "で", lat: "de" },
  { jap: "ど", lat: "do" },
  { jap: "な", lat: "na" },
  { jap: "に", lat: "ni" },
  { jap: "ぬ", lat: "nu" },
  { jap: "ね", lat: "ne" },
  { jap: "の", lat: "no" },
  { jap: "は", lat: "ha" },
  { jap: "ひ", lat: "hi" },
  { jap: "ふ", lat: "fu" },
  { jap: "へ", lat: "he" },
  { jap: "ほ", lat: "ho" },
  { jap: "ば", lat: "ba" },
  { jap: "び", lat: "bi" },
  { jap: "ぶ", lat: "bu" },
  { jap: "べ", lat: "be" },
  { jap: "ぼ", lat: "bo" },
  { jap: "ぱ", lat: "pa" },
  { jap: "ぴ", lat: "pi" },
  { jap: "ぷ", lat: "pu" },
  { jap: "ぺ", lat: "pe" },
  { jap: "ぽ", lat: "po" },
  { jap: "ま", lat: "ma" },
  { jap: "み", lat: "mi" },
  { jap: "む", lat: "mu" },
  { jap: "め", lat: "me" },
  { jap: "も", lat: "mo" },
  { jap: "や", lat: "ya" },
  { jap: "ゆ", lat: "yu" },
  { jap: "よ", lat: "yo" },
  { jap: "ら", lat: "ra" },
  { jap: "り", lat: "ri" },
  { jap: "る", lat: "ru" },
  { jap: "れ", lat: "re" },
  { jap: "ろ", lat: "ro" },
  { jap: "わ", lat: "wa" },
  { jap: "を", lat: "wo" },
  { jap: "ん", lat: "n/m" },
];
const hiraganaCombinations = [
  { jap: "きゃ", lat: "kya" },
  { jap: "きゅ", lat: "kyu" },
  { jap: "きょ", lat: "kyo" },
  { jap: "ぎゃ", lat: "gya" },
  { jap: "ぎゅ", lat: "gyu" },
  { jap: "ぎょ", lat: "gyo" },
  { jap: "しゃ", lat: "sha" },
  { jap: "しゅ", lat: "shu" },
  { jap: "しょ", lat: "sho" },
  { jap: "じゃ", lat: "ja" },
  { jap: "じゅ", lat: "ju" },
  { jap: "じょ", lat: "jo" },
  { jap: "ちゃ", lat: "cha" },
  { jap: "ちゅ", lat: "chu" },
  { jap: "ちょ", lat: "cho" },
  { jap: "にゃ", lat: "nya" },
  { jap: "にゅ", lat: "nyu" },
  { jap: "にょ", lat: "nyo" },
  { jap: "ひゃ", lat: "hya" },
  { jap: "ひゅ", lat: "hyu" },
  { jap: "ひょ", lat: "hyo" },
  { jap: "びゃ", lat: "bya" },
  { jap: "びゅ", lat: "byu" },
  { jap: "びょ", lat: "byo" },
  { jap: "ぴゃ", lat: "pya" },
  { jap: "ぴゅ", lat: "pyu" },
  { jap: "ぴょ", lat: "pyo" },
  { jap: "みゃ", lat: "mya" },
  { jap: "みゅ", lat: "myu" },
  { jap: "みょ", lat: "myo" },
  { jap: "りゃ", lat: "rya" },
  { jap: "りゅ", lat: "ryu" },
  { jap: "りょ", lat: "ryo" },
];
const katakana = [
  { jap: "ア", lat: "a" },
  { jap: "イ", lat: "i" },
  { jap: "ウ", lat: "u" },
  { jap: "エ", lat: "e" },
  { jap: "オ", lat: "o" },
  { jap: "カ", lat: "ka" },
  { jap: "キ", lat: "ki" },
  { jap: "ク", lat: "ku" },
  { jap: "ケ", lat: "ke" },
  { jap: "コ", lat: "ko" },
  { jap: "ガ", lat: "ga" },
  { jap: "ギ", lat: "gi" },
  { jap: "グ", lat: "gu" },
  { jap: "ゲ", lat: "ge" },
  { jap: "ゴ", lat: "go" },
  { jap: "サ", lat: "sa" },
  { jap: "シ", lat: "shi" },
  { jap: "ス", lat: "su" },
  { jap: "セ", lat: "se" },
  { jap: "ソ", lat: "so" },
  { jap: "ザ", lat: "za" },
  { jap: "ジ", lat: "ji" },
  { jap: "ズ", lat: "zu" },
  { jap: "ゼ", lat: "ze" },
  { jap: "ゾ", lat: "zo" },
  { jap: "タ", lat: "ta" },
  { jap: "チ", lat: "chi" },
  { jap: "ツ", lat: "tsu" },
  { jap: "テ", lat: "te" },
  { jap: "ト", lat: "to" },
  { jap: "ダ", lat: "da" },
  { jap: "ヂ", lat: "ji" },
  { jap: "ヅ", lat: "zu" },
  { jap: "デ", lat: "de" },
  { jap: "ド", lat: "do" },
  { jap: "ナ", lat: "na" },
  { jap: "ニ", lat: "ni" },
  { jap: "ヌ", lat: "nu" },
  { jap: "ネ", lat: "ne" },
  { jap: "ノ", lat: "no" },
  { jap: "ハ", lat: "ha" },
  { jap: "ヒ", lat: "hi" },
  { jap: "フ", lat: "fu" },
  { jap: "ヘ", lat: "he" },
  { jap: "ホ", lat: "ho" },
  { jap: "バ", lat: "ba" },
  { jap: "ビ", lat: "bi" },
  { jap: "ブ", lat: "bu" },
  { jap: "ベ", lat: "be" },
  { jap: "ボ", lat: "bo" },
  { jap: "パ", lat: "pa" },
  { jap: "ピ", lat: "pi" },
  { jap: "プ", lat: "pu" },
  { jap: "ぺ", lat: "pe" },
  { jap: "ポ", lat: "po" },
  { jap: "マ", lat: "ma" },
  { jap: "ミ", lat: "mi" },
  { jap: "ム", lat: "mu" },
  { jap: "メ", lat: "me" },
  { jap: "モ", lat: "mo" },
  { jap: "ヤ", lat: "ya" },
  { jap: "ユ", lat: "yu" },
  { jap: "ヨ", lat: "yo" },
  { jap: "ラ", lat: "ra" },
  { jap: "リ", lat: "ri" },
  { jap: "ル", lat: "ru" },
  { jap: "レ", lat: "re" },
  { jap: "ロ", lat: "ro" },
  { jap: "ワ", lat: "wa" },
  { jap: "ヲ", lat: "wo" },
  { jap: "ン", lat: "n/m" },
];
const katakanaCombinations = [
  { jap: "キャ", lat: "kya" },
  { jap: "キュ", lat: "kyu" },
  { jap: "キョ", lat: "kyo" },
  { jap: "ギャ", lat: "gya" },
  { jap: "ギュ", lat: "gyu" },
  { jap: "ギョ", lat: "gyo" },
  { jap: "シャ", lat: "sha" },
  { jap: "シュ", lat: "shu" },
  { jap: "ショ", lat: "sho" },
  { jap: "ジャ", lat: "ja" },
  { jap: "ジュ", lat: "ju" },
  { jap: "ジョ", lat: "jo" },
  { jap: "チャ", lat: "cha" },
  { jap: "チュ", lat: "chu" },
  { jap: "チョ", lat: "cho" },
  { jap: "ニャ", lat: "nya" },
  { jap: "ニュ", lat: "nyu" },
  { jap: "ニョ", lat: "nyo" },
  { jap: "ヒャ", lat: "hya" },
  { jap: "ヒュ", lat: "hyu" },
  { jap: "ヒョ", lat: "hyo" },
  { jap: "ビャ", lat: "bya" },
  { jap: "ビュ", lat: "byu" },
  { jap: "ビョ", lat: "byo" },
  { jap: "ピャ", lat: "pya" },
  { jap: "ピュ", lat: "pyu" },
  { jap: "ピョ", lat: "pyo" },
  { jap: "ミャ", lat: "mya" },
  { jap: "ミュ", lat: "myu" },
  { jap: "ミョ", lat: "myo" },
  { jap: "リャ", lat: "rya" },
  { jap: "リュ", lat: "ryu" },
  { jap: "リョ", lat: "ryo" },
];

export default function Game() {
  const fullCharacterList = [
    hiragana,
    hiraganaCombinations,
    katakana,
    katakanaCombinations,
  ];

  const [correct, setCorrect] = useState(0);
  const [checkedHiragana, setCheckedHiragana] = useState(true);
  const [checkedHiraganaComb, setCheckedHiraganaComb] = useState(false);
  const [checkedKatakana, setCheckedKatakana] = useState(false);
  const [checkedKatakanaComb, setCheckedKatakanaComb] = useState(false);
  const [wrong, setWrong] = useState(0);
  const [localCharacterList, setLocalCharacterList] = useState([""]);
  const [listStatus, setListStatus] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([0, 1, 2]);
  const [timer, setTimer] = useState(-1);
  const [isGameOver, setIsGameOver] = useState(true);
  const [missedCharacters, setMissedCharacters] = useState([""]);

  //useEffect that animates the character then if the character is outside of the parentElement it marks it as wrong choice
  useEffect(() => {
    let gameChar = document.getElementById("gameCharacter");
    if (isRunning) {
      // console.log(timer + "timer");
      const id = setTimeout(() => {
        gameChar.classList.add(`${style.gameTransition}`);
        gameChar.style.left =
          gameChar.parentElement.offsetLeft +
          gameChar.parentElement.clientWidth +
          gameChar.clientWidth * 2 +
          "px";

        setTimer(timer + 1);
      }, 100);
      if (
        gameChar.offsetLeft >=
        gameChar.parentElement.offsetLeft +
          gameChar.parentElement.clientWidth +
          gameChar.clientWidth * 2
      ) {
        gameChar.classList.remove(`${style.gameTransition}`);
        gameChar.style.left = "0px";
        // console.log(timer, "timer Cleared");
        setWrong(wrong + 1);
        if (localCharacterList.length > 0) {
          setMissedCharacters(missedCharacters.concat([currentCharacters[0]]));
        } else {
          document.getElementById("stopGame").click();
        }
        setLocalCharacterList(() =>
          localCharacterList.filter((element) => {
            return element != currentCharacters[0];
          })
        );
        clearTimeout(id);
      }
    } else {
      gameChar.classList.remove(`${style.gameTransition}`);
      gameChar.style.left = "0px";
      clearTimeout(id);
    }

    return () => {
      clearTimeout(id);
    };
  }, [timer, isRunning]);

  //function that takes an amount and list parameters then returns an array containing that amount of random items from the list without repetitions
  const randomObjects = (amount, list) => {
    let randomItems = [];
    while (randomItems.length < amount) {
      let newItem = list[Math.trunc(Math.random() * (list.length - 1))];
      randomItems.unshift(newItem);
      if (randomItems.length > 0) {
        for (let i = 1; i < list.length - 1; i++) {
          if (randomItems[i] == newItem) {
            randomItems.splice(i, i);
          }
        }
      }
    }
    return randomItems;
  };

  //Creates list for the game depending on the selected options.
  useEffect(() => {
    if (
      !checkedHiragana &&
      !checkedHiraganaComb &&
      !checkedKatakana &&
      !checkedKatakanaComb
    ) {
      // console.log("none checked", isRunning, "isRunning");
      setListStatus(() => false);
      setIsRunning(() => false);
    } else {
      setListStatus(true);
      setLocalCharacterList((localCharacterList.length = 0));
      if (checkedHiragana) {
        setLocalCharacterList(localCharacterList.push(...fullCharacterList[0]));
      }
      if (checkedHiraganaComb) {
        setLocalCharacterList(
          setLocalCharacterList(
            localCharacterList.push(...fullCharacterList[1])
          )
        );
      }
      if (checkedKatakana) {
        setLocalCharacterList(
          setLocalCharacterList(
            localCharacterList.push(...fullCharacterList[2])
          )
        );
      }
      if (checkedKatakanaComb) {
        setLocalCharacterList(
          setLocalCharacterList(
            localCharacterList.push(...fullCharacterList[3])
          )
        );
      }
      setLocalCharacterList(
        localCharacterList.filter((element) => {
          return element !== "";
        })
      );
    }
  }, [
    checkedHiragana,
    checkedHiraganaComb,
    checkedKatakana,
    checkedKatakanaComb,
    isRunning,
  ]);

  //useEffect that triggers when isRunning value changes resets values when starting the game and stops the animation and setState isGameOver when its value is false
  useEffect(() => {
    if (isRunning) {
      setMissedCharacters([]);
      setCorrect(0);
      setWrong(0);
      let gameChar = document.getElementById("gameCharacter");
      gameChar.classList.remove(`${style.gameTransition}`);
      gameChar.style.left = "0px";
      setTimer(0);
      document.querySelector(`.${style.missedContainer}`).style.display =
        "block";
    } else {
      setIsGameOver(true);
      document.querySelectorAll(`.${style.gameOption}`).forEach((element) => {
        element.disabled = false;
      });
    }
    // console.log(isRunning, "isRunning");
  }, [isRunning]);

  //function that gets the new values for the game gets 3 new character sets new orders for the options and enables the buttons again
  const nextCharactersSet = () => {
    setCurrentCharacters(() => randomObjects(3, localCharacterList));
    setCurrentOrder(currentOrder.sort(() => Math.random() - 0.5));
    document.querySelectorAll(`.${style.gameOption}`).forEach((element) => {
      element.disabled = false;
    });
    // console.log(localCharacterList, "after charater set");
  };

  //Compares the selected value to the current character set and removes it from the set list
  const choiceValidator = (target) => {
    document.querySelectorAll(`.${style.gameOption}`).forEach((element) => {
      element.disabled = true;
    });
    if (target.innerHTML == currentCharacters[0].lat) {
      target.classList.add(style.greenSelected);
    } else {
      target.classList.add(style.redSelected);
    }
    if (target.innerHTML !== currentCharacters[0].lat) {
      setMissedCharacters(missedCharacters.concat([currentCharacters[0]]));
    }

    console.log(missedCharacters);
    setTimeout(() => {
      target.classList.remove(style.redSelected);
      target.classList.remove(style.greenSelected);
      setLocalCharacterList(() =>
        localCharacterList.filter((element) => {
          return element != currentCharacters[0];
        })
      );
      let gameChar = document.getElementById("gameCharacter");
      gameChar.classList.remove(`${style.gameTransition}`);
      gameChar.style.left = gameChar.clientWidth * -1 + "px";
    }, 600);
  };

  //Depending on the changes of localCharacterList calls the next character or the end of the game
  useEffect(() => {
    if (localCharacterList.length > 0) {
      nextCharactersSet();
      // let gameChar = document.getElementById("gameCharacter");
      // gameChar.style.left = "0px";
      setTimer(0);
    } else {
      resetState();
    }
  }, [localCharacterList]);

  //function to resetState
  const resetState = () => {
    setCurrentCharacters([{ jap: "game over", lat: "" }, "", ""]);
    setCurrentOrder((currentOrder = [0, 1, 2]));
    console.log(missedCharacters);
  };
  //Changes the li background when a checkbox is checked
  const changeBackgroundChecked = (target) => {
    if (target.checked) {
      target.parentElement.classList.add(style.greenSelected);
    } else {
      target.parentElement.classList.remove(style.greenSelected);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>NiponABC Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <GameDescription />
      <GameCheckBox
        setCheckedHiragana={setCheckedHiragana}
        setCheckedHiraganaComb={setCheckedHiraganaComb}
        setCheckedKatakana={setCheckedKatakana}
        setCheckedKatakanaComb={setCheckedKatakanaComb}
        changeBackgroundChecked={changeBackgroundChecked}
        listStatus={listStatus}
        changeBackgroundChecked={changeBackgroundChecked}
        style={style}
      />
      <div className={style.game}>
        <div className={style.correct}>correct: {correct}</div>
        <div className={style.remaining}>Left: {localCharacterList.length}</div>
        <div className={style.wrong}>Wrong: {wrong}</div>
        <div className={style.gameCharacterContainer}>
          <p id="gameCharacter" className={style.gameCharacter}>
            {isRunning ? currentCharacters[0].jap : "ㅤ"}
          </p>
        </div>
        <GameButtons
          style={style}
          isRunning={isRunning}
          currentCharacters={currentCharacters}
          choiceValidator={choiceValidator}
          setCorrect={setCorrect}
          correct={correct}
          setWrong={setWrong}
          wrong={wrong}
          currentOrder={currentOrder}
        />
      </div>
      <div className={style.gameButtonsContainer}>
        <button
          type="button"
          id="startGame"
          className={style.gameButton}
          onClick={() => {
            setIsRunning(true);
            setIsGameOver(false);
          }}
        >
          Start Game
        </button>
        <button
          type="button"
          id="stopGame"
          className={style.gameButton}
          onClick={() => setIsRunning(false)}
        >
          Stop Game
        </button>
      </div>
      <div className={style.missedContainer}>
        {isGameOver ? (
          <>
            <h2>You missed</h2>
            <Table arrayProps={missedCharacters} />
          </>
        ) : (
          <h2></h2>
        )}
      </div>
      <style jsx global>{`
        :root {
          --step--2: clamp(0.91rem, 0.89rem + 0.1vw, 0.96rem);
          --step--1: clamp(1.09rem, 1.05rem + 0.21vw, 1.2rem);
          --step-0: clamp(1.31rem, 1.24rem + 0.37vw, 1.5rem);
          --step-1: clamp(1.58rem, 1.46rem + 0.59vw, 1.88rem);
          --step-2: clamp(1.89rem, 1.71rem + 0.89vw, 2.34rem);
          --step-3: clamp(2.27rem, 2.01rem + 1.29vw, 2.93rem);
          --step-4: clamp(2.72rem, 2.36rem + 1.83vw, 3.66rem);
          --step-5: clamp(3.27rem, 2.75rem + 2.56vw, 4.58rem);
          --step-6: clamp(3.92rem, 3.22rem + 3.52vw, 5.72rem);
          --step-7: clamp(4.7rem, 3.75rem + 4.78vw, 7.15rem);
          --step-8: clamp(5.64rem, 4.36rem + 6.43vw, 8.94rem);
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-size: var(--step--1);
          font-family: "Oshidashi";
        }
        a {
          text-decoration: none;
          color: black;
          font-family: "Oshidashi";
        }

        button {
          transition: all 0.35s ease;
        }

        @media (hover: hover) {
          button:hover {
            transform: scale(1.1);
          }
        }
        * {
          box-sizing: border-box;
        }
        .container {
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          font-size: 1.325rem;
          padding: 2rem;
        }
        h1 {
          padding-top: 1rem;
        }
      `}</style>
    </div>
  );
}
