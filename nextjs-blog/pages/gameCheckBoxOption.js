export default function GameCheckBox({
  setCheckedHiragana,
  setCheckedHiraganaComb,
  setCheckedKatakana,
  setCheckedKatakanaComb,
  listStatus,
  changeBackgroundChecked,
  style,
}) {
  return (
    <ul className={style.languagesUnorginzeslist}>
      <li className={`${style.gameOptionsList} ${style.greenSelected}`}>
        <label htmlFor="hiragana">Hiragana</label>
        <input
          id="hiragana"
          type="checkbox"
          className="checkboxLanguage"
          onClick={(target) => {
            setCheckedHiragana(target.target.checked);
            changeBackgroundChecked(target.target);
          }}
          defaultChecked={true}
        ></input>
      </li>
      <li className={style.gameOptionsList}>
        <label htmlFor="hiraganaComb">Hiragana combinations</label>
        <input
          id="hiraganaComb"
          type="checkbox"
          className="checkboxLanguage"
          onClick={(target) => {
            setCheckedHiraganaComb(target.target.checked);
            changeBackgroundChecked(target.target);
          }}
        ></input>
      </li>
      <li className={style.gameOptionsList}>
        <label htmlFor="katakana">Katakana</label>
        <input
          id="katakana"
          type="checkbox"
          className="checkboxLanguage"
          onClick={(target) => {
            setCheckedKatakana(target.target.checked);
            changeBackgroundChecked(target.target);
          }}
        ></input>
      </li>
      <li className={style.gameOptionsList}>
        <label htmlFor="katakanaComb">Katakana combinations</label>
        <input
          id="katakanaComb"
          type="checkbox"
          className="checkboxLanguage"
          onClick={(target) => {
            setCheckedKatakanaComb(target.target.checked);
            changeBackgroundChecked(target.target);
          }}
        ></input>
      </li>
      <li className={style.languageAlert}>
        <p id="selectOneLanguage" className={style.selectOneLanguage}>
          {listStatus ? "ㅤ" : "Please Select at least one option"}
        </p>
      </li>
    </ul>
  );
}
