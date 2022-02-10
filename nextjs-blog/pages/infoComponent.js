import style from "./infoComponent.module.css";

export default function InfoComponent({ id, title, image, sound, examples }) {
  const playSound = () => {
    const sound = document.getElementById("audio");
    sound.currentTime = 0;
    sound.playSound();
  };

  return (
    <div className={style.infoContainer} id={id}>
      <button
        className={style.btnClose}
        onClick={({ target }) => (target.parentElement.style.display = "none")}
      >
        X
      </button>
      <h3>{title}</h3>
      <img src={image} alt="picture of selected item" />
      <button
        className={style.btnSound}
        onClick={() => {
          playSound;
        }}
      >
        Sound Icon
      </button>
      <audio id="audio" src={sound} />
      <div className={style.examples}>
        <p>Examples</p>
        <ul>
          {examples.map((e, index) => {
            return (
              <li key={e}>
                <p>{e}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
