import style from "./languageCombTable.module.css";

export default function LanguageTableComb({ arrayProps }) {
  return (
    <div className={style.charactersCombGrid}>
      {arrayProps.map((letter, index) => {
        return (
          <div
            className={
              index % 6 >= 3
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
