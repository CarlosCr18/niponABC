import style from "./infoComponent.module.css";

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
      <div className={style.imgContainer}>
        <img
          id="imgId"
          loading="lazy"
          className={style.imageLanguages}
          src={image}
          alt="picture of selected item"
        />
      </div>
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
                loading="lazy"
                alt={"picture of example" + index}
                className={style.example}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
