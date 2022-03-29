import React, { useState, useEffect } from "react";
import style from "./gameCheckBox.module.css";
export default function GameCheckBox({
  setIsRunning,
  setLocalCharacterList,
  fullCharacterList,
}) {
  const [arrayToReturn, setArrayToReturn] = useState([[], [], [], []]);
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

    arrayToReturn.map((e) => {
      if (e == undefined) return;
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
  if (fullCharacterList?.length > 0) {
    return (
      <div className={style?.selectionContainer}>
        <h2 className={style?.title}>Add characters</h2>
        <div
          id="gameOptionsFullDescription"
          className={style?.gameOptionsFullDescription}
        >
          {" "}
          <ul className={style?.listText}>
            <li className={style?.selectAllInfo}>
              To add a complete alphabet tap on the "select all" button.
            </li>
            <li className={style?.clearAllInfo}>
              To delete a complete alphabet tap on the "clear all" button.
            </li>

            <li className={style?.listAllInfo}>
              To choose each specific character tap on the "open list" button.
              <ul>
                <li>Tap on any character you want to select it.</li>
                <li>Tap again on it to unselect it.</li>
                <li>Once you are ready tap on the "Add characters" button</li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <ul className={style.languagesUnorginzeslist}>
            <li
              className={
                arrayToReturn[0].length == 0
                  ? style.gameOptionsList
                  : `${style.gameOptionsList} ${style.greenSelected}`
              }
            >
              <p className={style.leftBar}> </p>
              <p className={style.gameOptionsTitle}>Hiragana</p>
              <p className={style.gameOptionsCounter}>
                {" " +
                  arrayToReturn[0].length +
                  "/" +
                  fullCharacterList[0].length +
                  " "}
              </p>
              <div className={style.selectButtons}>
                <button
                  id="hiraganaButton"
                  className={`${style.selectAllButton} ${style.callToActionButton}`}
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
            <li
              className={
                arrayToReturn[1].length == 0
                  ? style.gameOptionsList
                  : `${style.gameOptionsList} ${style.greenSelected}`
              }
            >
              <p className={style.leftBar}> </p>
              <p className={style.gameOptionsTitle}>Hiragana combinations</p>
              <p className={style.gameOptionsCounter}>
                {" " +
                  arrayToReturn[1].length +
                  "/" +
                  fullCharacterList[1].length +
                  " "}
              </p>
              <div className={style.selectButtons}>
                <button
                  className={`${style.selectAllButton} ${style.callToActionButton}`}
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
            <li
              className={
                arrayToReturn[2].length == 0
                  ? style.gameOptionsList
                  : `${style.gameOptionsList} ${style.greenSelected}`
              }
            >
              <p className={style.leftBar}> </p>
              <p className={style.gameOptionsTitle}>Katakana</p>
              <p className={style.gameOptionsCounter}>
                {" " +
                  arrayToReturn[2].length +
                  "/" +
                  fullCharacterList[2].length +
                  " "}
              </p>
              <div className={style.selectButtons}>
                <button
                  className={`${style.selectAllButton} ${style.callToActionButton}`}
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
            <li
              className={
                arrayToReturn[3].length == 0
                  ? style.gameOptionsList
                  : `${style.gameOptionsList} ${style.greenSelected}`
              }
            >
              <p className={style.leftBar}> </p>
              <p className={style.gameOptionsTitle}>Katakana combinations</p>
              <p className={style.gameOptionsCounter}>
                {" " +
                  arrayToReturn[3].length +
                  "/" +
                  fullCharacterList[3].length +
                  " "}
              </p>
              <div className={style.selectButtons}>
                <button
                  className={`${style.selectAllButton} ${style.callToActionButton}`}
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
            {!listStatus && (
              <li className={style.languageAlert}>
                <p id="selectOneLanguage" className={style.selectOneLanguage}>
                  Please Select at least one option
                </p>
              </li>
            )}
          </ul>
          <div className={style.charsList}>
            <div className={style.selectCharsbuttons}>
              <button
                onClick={() => {
                  selectAllChars();
                }}
              >
                Select All
              </button>
              <button
                onClick={() => {
                  clearAllChars();
                }}
              >
                Clear All
              </button>
              <button
                className={style.closeButton}
                onClick={() => closeElement()}
              >
                X
              </button>
            </div>
            <div className={style.inputsGrid}>
              {tempArray.map((e, index) => {
                return (
                  <div
                    className={style.gridItem}
                    key={"gridItem" + e.jap + index}
                    onClick={({ currentTarget }) => {
                      if (currentTarget.children[1].checked) {
                        currentTarget.classList.remove(style.greenSelected);
                        currentTarget.children[1].checked = false;
                      } else {
                        currentTarget.classList.add(style.greenSelected);
                        currentTarget.children[1].checked = true;
                      }
                    }}
                  >
                    <label htmlFor={"checkbox" + e.jap}>
                      {e.jap + " " + e.lat}
                    </label>
                    <input
                      id={"checkbox" + e.jap}
                      type="checkbox"
                      className={style.charsToAdd}
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
      </div>
    );
  } else {
    return <dialog open>Loading...</dialog>;
  }
}
