import style from "./gameStateButtons.module.css";

export default function GameStateButtons({ gameState, setGameState }) {
  const changeGameState = (target) => {
    setGameState(gameState + target);
  };

  return (
    <div className={style?.buttonsContainer}>
      {gameState > 0 && (
        <button
          className={`${style?.button} ${style?.button_appearance}  ${style?.decreaseButton}`}
          onClick={() => changeGameState(-1)}>
          ˂
        </button>
      )}
      {gameState < 2 && (
        <button
          className={
            gameState == 0
              ? `${style?.button} ${style?.button_appearance}  ${style?.increaseButton} ${style?.animatedButton}`
              : `${style?.button} ${style?.button_appearance}  ${style?.increaseButton}`
          }
          onClick={() => changeGameState(1)}>
          ˃
        </button>
      )}
    </div>
  );
}
