import style from "./game.module.css";
import React, { useState, useEffect } from "react";
import Table from "../tableComponents/languageTableComponent.js";
import GameDescription from "./gameDescription.js";
import GameCheckBox from "./gameCheckBoxOption.js";
import GameButtons from "./gameButtons.js";
import NavBar from "../navigationBar/navigationBar";
import Head from "next/head";

const hiragana = [
  { jap: "あ", lat: "a", infoImg: "/images/hiragana/a.jpg" },
  { jap: "い", lat: "i", infoImg: "/images/hiragana/i.jpg" },
  { jap: "う", lat: "u", infoImg: "/images/hiragana/u.jpg" },
  { jap: "え", lat: "e", infoImg: "/images/hiragana/e.jpg" },
  { jap: "お", lat: "o", infoImg: "/images/hiragana/o.jpg" },
  { jap: "か", lat: "ka", infoImg: "/images/hiragana/ka.jpg" },
  { jap: "き", lat: "ki", infoImg: "/images/hiragana/ki.jpg" },
  { jap: "く", lat: "ku", infoImg: "/images/hiragana/ku.jpg" },
  { jap: "け", lat: "ke", infoImg: "/images/hiragana/ke.jpg" },
  { jap: "こ", lat: "ko", infoImg: "/images/hiragana/ko.jpg" },
  { jap: "が", lat: "ga", infoImg: "/images/hiragana/ga.jpg" },
  { jap: "ぎ", lat: "gi", infoImg: "/images/hiragana/gi.jpg" },
  { jap: "ぐ", lat: "gu", infoImg: "/images/hiragana/gu.jpg" },
  { jap: "げ", lat: "ge", infoImg: "/images/hiragana/ge.jpg" },
  { jap: "ご", lat: "go", infoImg: "/images/hiragana/go.jpg" },
  { jap: "さ", lat: "sa", infoImg: "/images/hiragana/sa.jpg" },
  { jap: "し", lat: "shi", infoImg: "/images/hiragana/shi.jpg" },
  { jap: "す", lat: "su", infoImg: "/images/hiragana/su.jpg" },
  { jap: "せ", lat: "se", infoImg: "/images/hiragana/se.jpg" },
  { jap: "そ", lat: "so", infoImg: "/images/hiragana/so.jpg" },
  { jap: "ざ", lat: "za", infoImg: "/images/hiragana/za.jpg" },
  { jap: "じ", lat: "ji", infoImg: "/images/hiragana/ji.jpg" },
  { jap: "ず", lat: "zu", infoImg: "/images/hiragana/zu.jpg" },
  { jap: "ぜ", lat: "ze", infoImg: "/images/hiragana/ze.jpg" },
  { jap: "ぞ", lat: "zo", infoImg: "/images/hiragana/zo.jpg" },
  { jap: "た", lat: "ta", infoImg: "/images/hiragana/ta.jpg" },
  { jap: "ち", lat: "chi", infoImg: "/images/hiragana/chi.jpg" },
  { jap: "つ", lat: "tsu", infoImg: "/images/hiragana/tsu.jpg" },
  { jap: "て", lat: "te", infoImg: "/images/hiragana/te.jpg" },
  { jap: "と", lat: "to", infoImg: "/images/hiragana/to.jpg" },
  { jap: "だ", lat: "da", infoImg: "/images/hiragana/da.jpg" },
  { jap: "ぢ", lat: "ji", infoImg: "/images/hiragana/dji.jpg" },
  { jap: "づ", lat: "zu", infoImg: "/images/hiragana/dzu.jpg" },
  { jap: "で", lat: "de", infoImg: "/images/hiragana/de.jpg" },
  { jap: "ど", lat: "do", infoImg: "/images/hiragana/do.jpg" },
  { jap: "な", lat: "na", infoImg: "/images/hiragana/na.jpg" },
  { jap: "に", lat: "ni", infoImg: "/images/hiragana/ni.jpg" },
  { jap: "ぬ", lat: "nu", infoImg: "/images/hiragana/nu.jpg" },
  { jap: "ね", lat: "ne", infoImg: "/images/hiragana/ne.jpg" },
  { jap: "の", lat: "no", infoImg: "/images/hiragana/no.jpg" },
  { jap: "は", lat: "ha", infoImg: "/images/hiragana/ha.jpg" },
  { jap: "ひ", lat: "hi", infoImg: "/images/hiragana/hi.jpg" },
  { jap: "ふ", lat: "fu", infoImg: "/images/hiragana/fu.jpg" },
  { jap: "へ", lat: "he", infoImg: "/images/hiragana/he.jpg" },
  { jap: "ほ", lat: "ho", infoImg: "/images/hiragana/ho.jpg" },
  { jap: "ば", lat: "ba", infoImg: "/images/hiragana/ba.jpg" },
  { jap: "び", lat: "bi", infoImg: "/images/hiragana/bi.jpg" },
  { jap: "ぶ", lat: "bu", infoImg: "/images/hiragana/bu.jpg" },
  { jap: "べ", lat: "be", infoImg: "/images/hiragana/be.jpg" },
  { jap: "ぼ", lat: "bo", infoImg: "/images/hiragana/bo.jpg" },
  { jap: "ぱ", lat: "pa", infoImg: "/images/hiragana/pa.jpg" },
  { jap: "ぴ", lat: "pi", infoImg: "/images/hiragana/pi.jpg" },
  { jap: "ぷ", lat: "pu", infoImg: "/images/hiragana/pu.jpg" },
  { jap: "ぺ", lat: "pe", infoImg: "/images/hiragana/pe.jpg" },
  { jap: "ぽ", lat: "po", infoImg: "/images/hiragana/po.jpg" },
  { jap: "ま", lat: "ma", infoImg: "/images/hiragana/ma.jpg" },
  { jap: "み", lat: "mi", infoImg: "/images/hiragana/mi.jpg" },
  { jap: "む", lat: "mu", infoImg: "/images/hiragana/mu.jpg" },
  { jap: "め", lat: "me", infoImg: "/images/hiragana/me.jpg" },
  { jap: "も", lat: "mo", infoImg: "/images/hiragana/mo.jpg" },
  { jap: "や", lat: "ya", infoImg: "/images/hiragana/ya.jpg" },
  { jap: "ゆ", lat: "yu", infoImg: "/images/hiragana/yu.jpg" },
  { jap: "よ", lat: "yo", infoImg: "/images/hiragana/yo.jpg" },
  { jap: "ら", lat: "ra", infoImg: "/images/hiragana/ra.jpg" },
  { jap: "り", lat: "ri", infoImg: "/images/hiragana/ri.jpg" },
  { jap: "る", lat: "ru", infoImg: "/images/hiragana/ru.jpg" },
  { jap: "れ", lat: "re", infoImg: "/images/hiragana/re.jpg" },
  { jap: "ろ", lat: "ro", infoImg: "/images/hiragana/ro.jpg" },
  { jap: "わ", lat: "wa", infoImg: "/images/hiragana/wa.jpg" },
  { jap: "を", lat: "wo", infoImg: "/images/hiragana/wo.jpg" },
  { jap: "ん", lat: "n/m", infoImg: "/images/hiragana/n.jpg" },
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
  { jap: "ア", lat: "a", infoImg: "/images/katakana/a.jpg" },
  { jap: "イ", lat: "i", infoImg: "/images/katakana/i.jpg" },
  { jap: "ウ", lat: "u", infoImg: "/images/katakana/u.jpg" },
  { jap: "エ", lat: "e", infoImg: "/images/katakana/e.jpg" },
  { jap: "オ", lat: "o", infoImg: "/images/katakana/o.jpg" },
  { jap: "カ", lat: "ka", infoImg: "/images/katakana/ka.jpg" },
  { jap: "キ", lat: "ki", infoImg: "/images/katakana/ki.jpg" },
  { jap: "ク", lat: "ku", infoImg: "/images/katakana/ku.jpg" },
  { jap: "ケ", lat: "ke", infoImg: "/images/katakana/ke.jpg" },
  { jap: "コ", lat: "ko", infoImg: "/images/katakana/ko.jpg" },
  { jap: "ガ", lat: "ga", infoImg: "/images/katakana/ga.jpg" },
  { jap: "ギ", lat: "gi", infoImg: "/images/katakana/gi.jpg" },
  { jap: "グ", lat: "gu", infoImg: "/images/katakana/gu.jpg" },
  { jap: "ゲ", lat: "ge", infoImg: "/images/katakana/ge.jpg" },
  { jap: "ゴ", lat: "go", infoImg: "/images/katakana/go.jpg" },
  { jap: "サ", lat: "sa", infoImg: "/images/katakana/sa.jpg" },
  { jap: "シ", lat: "shi", infoImg: "/images/katakana/shi.jpg" },
  { jap: "ス", lat: "su", infoImg: "/images/katakana/su.jpg" },
  { jap: "セ", lat: "se", infoImg: "/images/katakana/se.jpg" },
  { jap: "ソ", lat: "so", infoImg: "/images/katakana/so.jpg" },
  { jap: "ザ", lat: "za", infoImg: "/images/katakana/za.jpg" },
  { jap: "ジ", lat: "ji", infoImg: "/images/katakana/ji.jpg" },
  { jap: "ズ", lat: "zu", infoImg: "/images/katakana/zu.jpg" },
  { jap: "ゼ", lat: "ze", infoImg: "/images/katakana/ze.jpg" },
  { jap: "ゾ", lat: "zo", infoImg: "/images/katakana/zo.jpg" },
  { jap: "タ", lat: "ta", infoImg: "/images/katakana/ta.jpg" },
  { jap: "チ", lat: "chi", infoImg: "/images/katakana/chi.jpg" },
  { jap: "ツ", lat: "tsu", infoImg: "/images/katakana/tsu.jpg" },
  { jap: "テ", lat: "te", infoImg: "/images/katakana/te.jpg" },
  { jap: "ト", lat: "to", infoImg: "/images/katakana/to.jpg" },
  { jap: "ダ", lat: "da", infoImg: "/images/katakana/da.jpg" },
  { jap: "ヂ", lat: "ji", infoImg: "/images/katakana/dji.jpg" },
  { jap: "ヅ", lat: "zu", infoImg: "/images/katakana/dzu.jpg" },
  { jap: "デ", lat: "de", infoImg: "/images/katakana/de.jpg" },
  { jap: "ド", lat: "do", infoImg: "/images/katakana/do.jpg" },
  { jap: "ナ", lat: "na", infoImg: "/images/katakana/na.jpg" },
  { jap: "ニ", lat: "ni", infoImg: "/images/katakana/ni.jpg" },
  { jap: "ヌ", lat: "nu", infoImg: "/images/katakana/nu.jpg" },
  { jap: "ネ", lat: "ne", infoImg: "/images/katakana/ne.jpg" },
  { jap: "ノ", lat: "no", infoImg: "/images/katakana/no.jpg" },
  { jap: "ハ", lat: "ha", infoImg: "/images/katakana/ha.jpg" },
  { jap: "ヒ", lat: "hi", infoImg: "/images/katakana/hi.jpg" },
  { jap: "フ", lat: "fu", infoImg: "/images/katakana/fu.jpg" },
  { jap: "ヘ", lat: "he", infoImg: "/images/katakana/he.jpg" },
  { jap: "ホ", lat: "ho", infoImg: "/images/katakana/ho.jpg" },
  { jap: "バ", lat: "ba", infoImg: "/images/katakana/ba.jpg" },
  { jap: "ビ", lat: "bi", infoImg: "/images/katakana/bi.jpg" },
  { jap: "ブ", lat: "bu", infoImg: "/images/katakana/bu.jpg" },
  { jap: "ベ", lat: "be", infoImg: "/images/katakana/be.jpg" },
  { jap: "ボ", lat: "bo", infoImg: "/images/katakana/bo.jpg" },
  { jap: "パ", lat: "pa", infoImg: "/images/katakana/pa.jpg" },
  { jap: "ピ", lat: "pi", infoImg: "/images/katakana/pi.jpg" },
  { jap: "プ", lat: "pu", infoImg: "/images/katakana/pu.jpg" },
  { jap: "ぺ", lat: "pe", infoImg: "/images/katakana/pe.jpg" },
  { jap: "ポ", lat: "po", infoImg: "/images/katakana/po.jpg" },
  { jap: "マ", lat: "ma", infoImg: "/images/katakana/ma.jpg" },
  { jap: "ミ", lat: "mi", infoImg: "/images/katakana/mi.jpg" },
  { jap: "ム", lat: "mu", infoImg: "/images/katakana/mu.jpg" },
  { jap: "メ", lat: "me", infoImg: "/images/katakana/me.jpg" },
  { jap: "モ", lat: "mo", infoImg: "/images/katakana/mo.jpg" },
  { jap: "ヤ", lat: "ya", infoImg: "/images/katakana/ya.jpg" },
  { jap: "ユ", lat: "yu", infoImg: "/images/katakana/yu.jpg" },
  { jap: "ヨ", lat: "yo", infoImg: "/images/katakana/yo.jpg" },
  { jap: "ラ", lat: "ra", infoImg: "/images/katakana/ra.jpg" },
  { jap: "リ", lat: "ri", infoImg: "/images/katakana/ri.jpg" },
  { jap: "ル", lat: "ru", infoImg: "/images/katakana/ru.jpg" },
  { jap: "レ", lat: "re", infoImg: "/images/katakana/re.jpg" },
  { jap: "ロ", lat: "ro", infoImg: "/images/katakana/ro.jpg" },
  { jap: "ワ", lat: "wa", infoImg: "/images/katakana/wa.jpg" },
  { jap: "ヲ", lat: "wo", infoImg: "/images/katakana/wo.jpg" },
  { jap: "ン", lat: "n/m", infoImg: "/images/katakana/n.jpg" },
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
