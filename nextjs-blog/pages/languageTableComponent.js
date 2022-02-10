import style from "./characterSet.module.css";
export default function LanguageTableComponent({ arrayProps }) {
  return (
    <div className={style.charactersGrid}>
      {arrayProps.map((letter, index) => {
        return (
          <div
            className={
              index % 10 >= 5
                ? `${style.characterContainer}`
                : `${style.characterContainer} ${style.backgroundBlue}`
            }
          >
            <div className={style.letterJap}>{letter.jap}</div>
            <div className={style.letterLat}>{letter.lat}</div>
          </div>
        );
      })}
    </div>
  );
}
