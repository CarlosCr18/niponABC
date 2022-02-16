import React, { useState, useEffect } from "react";
import style from "./gameCheckBox.module.css";
export default function GameCheckBox({
  setIsRunning,
  setLocalCharacterList,
  fullCharacterList,
}) {
  const [arrayToReturn, setArrayToReturn] = useState([, [], [], []]);
  const [tempArray, setTempArray] = useState([, , ,]);
  const [currentChars, setCurrentChars] = useState(0);
  const [listStatus, setListStatus] = useState(false);

  const changeTempArray = (index) => {
    setTempArray(() => fullCharacterList[index]);
    setCurrentChars(index);

    let element = document.querySelectorAll(`.${style.charsList}`);
    element[0].classList.add(style.inflate);

    clearAllChars();
  };

  useEffect(() => {
    document.getElementById("hiraganaButton").click();
  }, []);

  const closeElement = () => {
    let element = document.querySelectorAll(`.${style.charsList}`);
    element[0].classList.remove(style.inflate);
    // console.log(arrayToReturn, arrayHolder);
  };

  const addCharacters = () => {
    let arrayHolder = [];
    let checkboxes = document.querySelectorAll(`.${style.charsToAdd}`);
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked == false) return;
      arrayHolder.push(tempArray[index]);
    });
    let ArrayToReturnClone = [...arrayToReturn];
    ArrayToReturnClone[currentChars] = [...arrayHolder];
    setArrayToReturn(() => ArrayToReturnClone);
    let element = document.querySelectorAll(`.${style.charsList}`);
    element[0].classList.remove(style.inflate);
    // console.log(arrayToReturn, arrayHolder);
    clearAllChars();
  };

  const addAllChars = (index) => {
    let arrayHolder = fullCharacterList[index];
    let ArrayToReturnClone = [...arrayToReturn];
    ArrayToReturnClone[index] = [...arrayHolder];
    setArrayToReturn(() => ArrayToReturnClone);
  };
  const clearAllCharsButton = (index) => {
    let arrayHolder = [];
    let ArrayToReturnClone = [...arrayToReturn];
    ArrayToReturnClone[index] = [...arrayHolder];
    setArrayToReturn(() => ArrayToReturnClone);
  };
  const selectAllChars = () => {
    let checkboxes = document.querySelectorAll(`.${style.charsToAdd}`);
    checkboxes[0].labels[0].innerHTML;
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
      if (checkbox.labels.length == 1) {
        checkbox.parentElement.classList.add(style.greenSelected);
      }
    });
  };
  const clearAllChars = () => {
    let checkboxes = document.querySelectorAll(`.${style.charsToAdd}`);
    checkboxes.forEach((checkbox) => {
      (checkbox.checked = false),
        checkbox.parentElement.classList.remove(style.greenSelected);
    });
  };

  useEffect(() => {
    let thisArray = [];

    arrayToReturn.map((e, index) => {
      if (e == undefined) return;
      if (e.length > 0) {
        document
          .querySelectorAll(`.${style.gameOptionsList}`)
          [index].classList.add(style.greenSelected);
      } else {
        document
          .querySelectorAll(`.${style.gameOptionsList}`)
          [index].classList.remove(style.greenSelected);
      }

      e.map((a) => {
        thisArray.push(a);
      });
    });
    if (thisArray.length == 0) {
      setIsRunning(false);
      setListStatus(false);
    } else {
      setListStatus(true);
    }
    thisArray = thisArray.filter((element) => {
      return element.jap !== "";
    });

    setLocalCharacterList(thisArray);
  }, [arrayToReturn]);

  return (
    <div>
      <ul className={style.languagesUnorginzeslist}>
        <li className={`${style.gameOptionsList} ${style.greenSelected}`}>
          <p className={style.gameOptionsTitle}>Hiragana</p>
          <div className={style.selectButtons}>
            <button
              id="hiraganaButton"
              className={style.selectAllButton}
              onClick={() => {
                addAllChars(0);
                closeElement();
              }}
            >
              Select All
            </button>
            <button
              className={style.selectAllButton}
              onClick={() => {
                clearAllCharsButton(0);
                closeElement();
              }}
            >
              Clear All
            </button>
            <button
              className={style.selectAllButton}
              onClick={(target) => {
                changeTempArray(0);
                setTimeout(() => {
                  changeTempArray(0);
                }, 400);
              }}
            >
              Open list
            </button>
          </div>
        </li>
        <li className={style.gameOptionsList}>
          <p className={style.gameOptionsTitle}>Hiragana combinations</p>
          <div className={style.selectButtons}>
            <button
              className={style.selectAllButton}
              onClick={() => {
                addAllChars(1);
                closeElement();
              }}
            >
              Select All
            </button>
            <button
              className={style.selectAllButton}
              onClick={() => {
                clearAllCharsButton(1);
                closeElement();
              }}
            >
              Clear All
            </button>
            <button
              className={style.selectAllButton}
              onClick={(target) => {
                changeTempArray(1);
              }}
            >
              Open list
            </button>
          </div>
        </li>
        <li className={style.gameOptionsList}>
          <p className={style.gameOptionsTitle}>Katakana</p>
          <div className={style.selectButtons}>
            <button
              className={style.selectAllButton}
              onClick={() => {
                addAllChars(2);
                closeElement();
              }}
            >
              Select All
            </button>
            <button
              className={style.selectAllButton}
              onClick={() => {
                clearAllCharsButton(2);
                closeElement();
              }}
            >
              Clear All
            </button>
            <button
              className={style.selectAllButton}
              onClick={(target) => {
                changeTempArray(2);
              }}
            >
              Open list
            </button>
          </div>
        </li>
        <li className={style.gameOptionsList}>
          <p className={style.gameOptionsTitle}>Katakana combinations</p>
          <div className={style.selectButtons}>
            <button
              className={style.selectAllButton}
              onClick={() => {
                addAllChars(3);
                closeElement();
              }}
            >
              Select All
            </button>
            <button
              className={style.selectAllButton}
              onClick={() => {
                clearAllCharsButton(3);
                closeElement();
              }}
            >
              Clear All
            </button>
            <button
              className={style.selectAllButton}
              onClick={(target) => {
                changeTempArray(3);
              }}
            >
              Open list
            </button>
          </div>
        </li>
        <li className={style.languageAlert}>
          <p id="selectOneLanguage" className={style.selectOneLanguage}>
            {listStatus ? "ㅤ" : "Please Select at least one option"}
          </p>
        </li>
      </ul>
      <div className={style.charsList}>
        <div className={style.selectCharsbuttons}>
          <button
            onClick={() => {
              clearAllChars();
            }}
          >
            Clear All
          </button>
          <button
            onClick={() => {
              selectAllChars();
            }}
          >
            Select All
          </button>
          <button className={style.closeButton} onClick={() => closeElement()}>
            X
          </button>
        </div>
        <div className={style.inputsGrid}>
          {tempArray.map((e, index) => {
            return (
              <div className={style.gridItem} key={"gridItem" + e.jap + index}>
                <label htmlFor={"checkbox" + e.jap}>
                  {e.jap + " " + e.lat}
                </label>
                <input
                  id={"checkbox" + e.jap}
                  type="checkbox"
                  className={style.charsToAdd}
                  onChange={(target) => {
                    target.target.checked
                      ? target.target.parentElement.classList.add(
                          style.greenSelected
                        )
                      : target.target.parentElement.classList.remove(
                          style.greenSelected
                        );
                  }}
                ></input>
              </div>
            );
          })}
        </div>
        <button
          className={style.addCharsButton}
          onClick={() => {
            addCharacters();
          }}
        >
          Add characters
        </button>
      </div>
    </div>
  );
}
