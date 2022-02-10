import style from "./infoComponent.module.css";
import Image from "next/image";

export default function InfoComponent({ id, title, image, sound, examples }) {
  const playSound = () => {
    const sound = document.getElementById("audio");
    sound.currentTime = 0;
    sound.playSound();
  };

  return (
    <div className={`${style.infoContainer}`} id={id}>
      <button
        className={style.btnClose}
        onClick={({ target }) => {
          target.parentElement.classList.remove(`${style.scaleUp}`);
        }}
      >
        X
      </button>
      <h3>{title}</h3>
      <img
        src={image}
        alt="picture of selected item"
        loading="lazy"
        width="300px"
        height="300px"
      />
      <button
        className={style.btnSound}
        onClick={() => {
          playSound;
        }}
      >
        Sound Icon
      </button>
      <audio id="audio" src={sound} />
      <div className={style.examplesContainer}>
        <p>Examples</p>
        <div className={style.examples}>
          {examples.map((e, index) => {
            return (
              <img
                key={e}
                src={e}
                alt={"picture of example" + index}
                loading="lazy"
                width="300px"
                height="300px"
                className={style.example}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
