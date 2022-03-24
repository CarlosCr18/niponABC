import style from "./gameStateButtons.module.css";

export default function GameStateButtons({ gameState, setGameState }) {
  const changeGameState = (target) => {
    console.log(target, setGameState);
    setGameState(gameState + target);
  };

  return (
    <div className={style?.buttonsContainer}>
      {gameState > 0 && (
        <button
          className={`${style?.button} ${style?.button_appearance}  ${style?.decreaseButton}`}
          onClick={() => changeGameState(-1)}
        >
          ˂
        </button>
      )}
      {gameState < 2 && (
        <button
          className={`${style?.button} ${style?.button_appearance}  ${style?.increaseButton}`}
          onClick={() => changeGameState(1)}
        >
          ˃
        </button>
      )}
    </div>
  );
}
