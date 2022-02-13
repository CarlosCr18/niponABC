import style from "./infoComponent.module.css";

export default function InfoComponent({
  id,
  title,
  image,
  sound,
  examples,
  japLetter,
  latLetter,
}) {
  const playSound = () => {
    const sound = document.getElementById("audio");
    sound.currentTime = 0;
    sound.playSound();
  };

  let imageArray = image.length > 0 ? [...image] : [image];
  let examplesArray = examples.length > 0 ? [...examples] : [examples];

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
      <h3 className={style.title}>{title}</h3>

      <div className={style.imgContainer}>
        {imageArray.map((img, i) => (
          <img
            key={img + i + "key"}
            loading="lazy"
            className={style.imageLanguages}
            src={img}
            alt="picture of selected item"
          />
        ))}
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
      <h3>Examples</h3>
      <div className={style.examplesContainer}>
        {examples.map((e, index) => {
          let divClass =
            index !== 1
              ? `${style.examples}`
              : `${style.examples} ${style.example2}`;
          let japExample = ("" + e.jap).split("");
          return (
            <div className={divClass}>
              <p className={style.example}>
                {japExample.map((letter) => {
                  return letter == japLetter ? <span>{letter}</span> : letter;
                })}
              </p>
              <p className={style.example}>{e.lat}</p>
              <p className={style.example}>{e.meaning}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
