import style from "./game.module.css";
import React, { useState, useEffect } from "react";
import Table from "../tableComponents/languageTableComponent.js";
import GameDescription from "./gameDescription.js";
import GameCheckBox from "./gameCheckBoxOption.js";
import GameButtons from "./gameButtons.js";
import NavBar from "../navigationBar/navigationBar";
import Head from "next/head";
import Footer from "../footer/footer.js";
import { hiragana } from "../languageDatabase.js";
import { hiraganaCombinations } from "../languageDatabase.js";
import { katakana } from "../languageDatabase.js";
import { katakanaCombinations } from "../languageDatabase.js";

export default function Game() {
  const fullCharacterList = [
    hiragana,
    hiraganaCombinations,
    katakana,
    katakanaCombinations,
  ];

  // console.log(fullCharacterList, "fullcharacterlist");

  const [correct, setCorrect] = useState(0);

  const [wrong, setWrong] = useState(0);
  const [localCharacterList, setLocalCharacterList] = useState([""]);
  const [gameList, setGameList] = useState([""]);
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

  //updates the game characters list
  useEffect(() => {
    setLocalCharacterList(gameList);
  }, [gameList, isRunning]);

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

    // console.log(missedCharacters);
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
    // console.log(missedCharacters);
  };
  return (
    <div className="container">
      <Head>
        <title>NiponABC Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <GameDescription style={style} />
      <GameCheckBox
        setIsRunning={setIsRunning}
        setLocalCharacterList={setGameList}
        fullCharacterList={fullCharacterList}
      />
      <div className={style.game}>
        <div className={style.correct}>correct: {correct}</div>
        <div className={style.remaining}>
          Chars: {localCharacterList.length}
        </div>
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
          font-family: "Oshidashi";
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
          position: relative;
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
          padding-bottom: 10rem;
          margin-bottom: ;
        }
        h1 {
          padding-top: 1rem;
        }
      `}</style>
      <Footer />
    </div>
  );
}
