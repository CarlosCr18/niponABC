import Link from "next/link";
import style from "../characterSet.module.css";
import Table from "../tableComponents/languageTableComponent.js";
import TableComb from "../tableComponents/languageCombTableComponent.js";

const hiragana = [
  { jap: "あ", lat: "a" },
  { jap: "い", lat: "i" },
  { jap: "う", lat: "u" },
  { jap: "え", lat: "e" },
  { jap: "お", lat: "o" },
  { jap: "か", lat: "ka" },
  { jap: "き", lat: "ki" },
  { jap: "く", lat: "ku" },
  { jap: "け", lat: "ke" },
  { jap: "こ", lat: "ko" },
  { jap: "が", lat: "ga" },
  { jap: "ぎ", lat: "gi" },
  { jap: "ぐ", lat: "gu" },
  { jap: "げ", lat: "ge" },
  { jap: "ご", lat: "go" },
  { jap: "さ", lat: "sa" },
  { jap: "し", lat: "shi" },
  { jap: "す", lat: "su" },
  { jap: "せ", lat: "se" },
  { jap: "そ", lat: "so" },
  { jap: "ざ", lat: "za" },
  { jap: "じ", lat: "ji" },
  { jap: "ず", lat: "zu" },
  { jap: "ぜ", lat: "ze" },
  { jap: "ぞ", lat: "zo" },
  { jap: "た", lat: "ta" },
  { jap: "ち", lat: "chi" },
  { jap: "つ", lat: "tsu" },
  { jap: "て", lat: "te" },
  { jap: "と", lat: "to" },
  { jap: "だ", lat: "da" },
  { jap: "ぢ", lat: "ji" },
  { jap: "づ", lat: "zu" },
  { jap: "で", lat: "de" },
  { jap: "ど", lat: "do" },
  { jap: "な", lat: "na" },
  { jap: "に", lat: "ni" },
  { jap: "ぬ", lat: "nu" },
  { jap: "ね", lat: "ne" },
  { jap: "の", lat: "no" },
  { jap: "は", lat: "ha" },
  { jap: "ひ", lat: "hi" },
  { jap: "ふ", lat: "fu" },
  { jap: "へ", lat: "he" },
  { jap: "ほ", lat: "ho" },
  { jap: "ば", lat: "ba" },
  { jap: "び", lat: "bi" },
  { jap: "ぶ", lat: "bu" },
  { jap: "べ", lat: "be" },
  { jap: "ぼ", lat: "bo" },
  { jap: "ぱ", lat: "pa" },
  { jap: "ぴ", lat: "pi" },
  { jap: "ぷ", lat: "pu" },
  { jap: "ぺ", lat: "pe" },
  { jap: "ぽ", lat: "po" },
  { jap: "ま", lat: "ma" },
  { jap: "み", lat: "mi" },
  { jap: "む", lat: "mu" },
  { jap: "め", lat: "me" },
  { jap: "も", lat: "mo" },
  { jap: "や", lat: "ya" },
  { jap: " ", lat: " " },
  { jap: "ゆ", lat: "yu" },
  { jap: " ", lat: " " },
  { jap: "よ", lat: "yo" },
  { jap: "ら", lat: "ra" },
  { jap: "り", lat: "ri" },
  { jap: "る", lat: "ru" },
  { jap: "れ", lat: "re" },
  { jap: "ろ", lat: "ro" },
  { jap: "わ", lat: "wa" },
  { jap: "を", lat: "wo" },
  { jap: "ん", lat: "n/m" },
  { jap: " ", lat: " " },
  { jap: " ", lat: " " },
];
const hiraganaCombinations = [
  { jap: "きゃ", lat: "kya" },
  { jap: "きゅ", lat: "kyu" },
  { jap: "きょ", lat: "kyo" },
  { jap: "ぎゃ", lat: "gya" },
  { jap: "ぎゅ", lat: "gyu" },
  { jap: "ぎょ", lat: "gyo" },
  { jap: "しゃ", lat: "sha" },
  { jap: "しゅ", lat: "shu" },
  { jap: "しょ", lat: "sho" },
  { jap: "じゃ", lat: "ja" },
  { jap: "じゅ", lat: "ju" },
  { jap: "じょ", lat: "jo" },
  { jap: "ちゃ", lat: "cha" },
  { jap: "ちゅ", lat: "chu" },
  { jap: "ちょ", lat: "cho" },
  { jap: "にゃ", lat: "nya" },
  { jap: "にゅ", lat: "nyu" },
  { jap: "にょ", lat: "nyo" },
  { jap: "ひゃ", lat: "hya" },
  { jap: "ひゅ", lat: "hyu" },
  { jap: "ひょ", lat: "hyo" },
  { jap: "びゃ", lat: "bya" },
  { jap: "びゅ", lat: "byu" },
  { jap: "びょ", lat: "byo" },
  { jap: "ぴゃ", lat: "pya" },
  { jap: "ぴゅ", lat: "pyu" },
  { jap: "ぴょ", lat: "pyo" },
  { jap: "みゃ", lat: "mya" },
  { jap: "みゅ", lat: "myu" },
  { jap: "みょ", lat: "myo" },
  { jap: "りゃ", lat: "rya" },
  { jap: "りゅ", lat: "ryu" },
  { jap: "りょ", lat: "ryo" },
];

export default function Hiragana() {
  return (
    <div className="container">
      <h1 className={style.title}>
        <p>Hiragana</p>
        <p>ひらがな</p>
      </h1>
      <p>
        The characters in the chart below are called Hiragana. Hiragana is the
        main alphabet or character set for Japanese.{" "}
      </p>
      <div className={style.vowelsText}>
        <p>There are 5 vowels in Japanese. </p>
        <ul className={style.vowelsListItem}>
          <li>{hiragana[0].jap + " " + hiragana[0].lat}</li>
          <li>{hiragana[1].jap + " " + hiragana[1].lat}</li>
          <li>{hiragana[2].jap + " " + hiragana[2].lat}</li>
          <li>{hiragana[3].jap + " " + hiragana[3].lat}</li>
          <li>{hiragana[4].jap + " " + hiragana[4].lat}</li>
        </ul>
      </div>
      <p>
        All Hiragana characters end with one of these vowels, with the exception
        of (n).{" "}
      </p>
      <h2>Hiragana character set</h2>
      <p>Tap on any character to get more information.</p>
      <Table arrayProps={hiragana} />
      <h2>Hiragana combinations</h2>
      <TableComb arrayProps={hiraganaCombinations} />
      <h2>
        <Link href="/game">
          <a>Back to game</a>
        </Link>
      </h2>
      <h2>
        <Link href="/login">
          <a>Back to Login</a>
        </Link>
      </h2>
      <style jsx global>{`
        :root {
          --step--2: clamp(0.91rem, 0.89rem + 0.1vw, 0.96rem);
          --step--1: clamp(1.09rem, 1.05rem + 0.21vw, 1.2rem);
          --step-0: clamp(1.31rem, 1.24rem + 0.37vw, 1.5rem);
          --step-1: clamp(1.58rem, 1.46rem + 0.59vw, 1.88rem);
          --step-2: clamp(1.89rem, 1.71rem + 0.89vw, 2.34rem);
          --step-3: clamp(2.27rem, 2.01rem + 1.29vw, 2.93rem);
          --step-4: clamp(2.72rem, 2.36rem + 1.83vw, 3.66rem);
          --step-5: clamp(3.27rem, 2.75rem + 2.56vw, 4.58rem);
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: var(--step--1);
          font-family: Oshidashi;
        }
        a {
          font-family: Oshidashi;
          text-decoration: none;
          color: black;
        }

        * {
          box-sizing: border-box;
        }
        .container {
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          font-size: 1.325rem;
          padding: 1rem;
          gap: 1rem;
        }
        h2 {
          padding-top: 1rem;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
