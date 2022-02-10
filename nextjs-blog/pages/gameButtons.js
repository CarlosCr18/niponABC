export default function GameButtons({
  style,
  isRunning,
  currentCharacters,
  choiceValidator,
  setCorrect,
  correct,
  setWrong,
  wrong,
  currentOrder,
}) {
  let buttonsArray = [];
  for (let i = 0; i < 3; i++) {
    buttonsArray.push(
      <button
        className={style.gameOption}
        onClick={(target) => {
          if (isRunning) {
            let validate = target.target.innerHTML == currentCharacters[0].lat;
            choiceValidator(target.target);
            setCorrect(validate ? correct + 1 : correct);
            setWrong(validate ? wrong : wrong + 1);
          }
        }}
      >
        {isRunning ? currentCharacters[currentOrder[i]].lat : "ㅤ"}
      </button>
    );
  }

  return (
    <div className={style.gameOptionsContainer}>
      {buttonsArray.map((e) => e)}
    </div>
  );
}
