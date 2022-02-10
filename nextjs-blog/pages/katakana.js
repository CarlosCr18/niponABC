import Link from "next/link";
import style from "./characterSet.module.css";

const katakana = [
  { jap: "ア", lat: "a" },
  { jap: "イ", lat: "i" },
  { jap: "ウ", lat: "u" },
  { jap: "エ", lat: "e" },
  { jap: "オ", lat: "o" },
  { jap: "カ", lat: "ka" },
  { jap: "キ", lat: "ki" },
  { jap: "ク", lat: "ku" },
  { jap: "ケ", lat: "ke" },
  { jap: "コ", lat: "ko" },
  { jap: "ガ", lat: "ga" },
  { jap: "ギ", lat: "gi" },
  { jap: "グ", lat: "gu" },
  { jap: "ゲ", lat: "ge" },
  { jap: "ゴ", lat: "go" },
  { jap: "サ", lat: "sa" },
  { jap: "シ", lat: "shi" },
  { jap: "ス", lat: "su" },
  { jap: "セ", lat: "se" },
  { jap: "ソ", lat: "so" },
  { jap: "ザ", lat: "za" },
  { jap: "ジ", lat: "ji" },
  { jap: "ズ", lat: "zu" },
  { jap: "ゼ", lat: "ze" },
  { jap: "ゾ", lat: "zo" },
  { jap: "タ", lat: "ta" },
  { jap: "チ", lat: "chi" },
  { jap: "ツ", lat: "tsu" },
  { jap: "テ", lat: "te" },
  { jap: "ト", lat: "to" },
  { jap: "ダ", lat: "da" },
  { jap: "ヂ", lat: "ji" },
  { jap: "ヅ", lat: "zu" },
  { jap: "デ", lat: "de" },
  { jap: "ド", lat: "do" },
  { jap: "ナ", lat: "na" },
  { jap: "ニ", lat: "ni" },
  { jap: "ヌ", lat: "nu" },
  { jap: "ネ", lat: "ne" },
  { jap: "ノ", lat: "no" },
  { jap: "ハ", lat: "ha" },
  { jap: "ヒ", lat: "hi" },
  { jap: "フ", lat: "fu" },
  { jap: "ヘ", lat: "he" },
  { jap: "ホ", lat: "ho" },
  { jap: "バ", lat: "ba" },
  { jap: "ビ", lat: "bi" },
  { jap: "ブ", lat: "bu" },
  { jap: "ベ", lat: "be" },
  { jap: "ボ", lat: "bo" },
  { jap: "パ", lat: "pa" },
  { jap: "ピ", lat: "pi" },
  { jap: "プ", lat: "pu" },
  { jap: "ぺ", lat: "pe" },
  { jap: "ポ", lat: "po" },
  { jap: "マ", lat: "ma" },
  { jap: "ミ", lat: "mi" },
  { jap: "ム", lat: "mu" },
  { jap: "メ", lat: "me" },
  { jap: "モ", lat: "mo" },
  { jap: "ヤ", lat: "ya" },
  { jap: " ", lat: " " },
  { jap: "ユ", lat: "yu" },
  { jap: " ", lat: " " },
  { jap: "ヨ", lat: "yo" },
  { jap: "ラ", lat: "ra" },
  { jap: "リ", lat: "ri" },
  { jap: "ル", lat: "ru" },
  { jap: "レ", lat: "re" },
  { jap: "ロ", lat: "ro" },
  { jap: "ワ", lat: "wa" },
  { jap: "ヲ", lat: "wo" },
  { jap: "ン", lat: "n/m" },
  { jap: " ", lat: " " },
  { jap: " ", lat: " " },
];
const katakanaCombinations = [
  { jap: "キャ", lat: "kya" },
  { jap: "キュ", lat: "kyu" },
  { jap: "キョ", lat: "kyo" },
  { jap: "ギャ", lat: "gya" },
  { jap: "ギュ", lat: "gyu" },
  { jap: "ギョ", lat: "gyo" },
  { jap: "シャ", lat: "sha" },
  { jap: "シュ", lat: "shu" },
  { jap: "ショ", lat: "sho" },
  { jap: "ジャ", lat: "ja" },
  { jap: "ジュ", lat: "ju" },
  { jap: "ジョ", lat: "jo" },
  { jap: "チャ", lat: "cha" },
  { jap: "チュ", lat: "chu" },
  { jap: "チョ", lat: "cho" },
  { jap: "ニャ", lat: "nya" },
  { jap: "ニュ", lat: "nyu" },
  { jap: "ニョ", lat: "nyo" },
  { jap: "ヒャ", lat: "hya" },
  { jap: "ヒュ", lat: "hyu" },
  { jap: "ヒョ", lat: "hyo" },
  { jap: "ビャ", lat: "bya" },
  { jap: "ビュ", lat: "byu" },
  { jap: "ビョ", lat: "byo" },
  { jap: "ピャ", lat: "pya" },
  { jap: "ピュ", lat: "pyu" },
  { jap: "ピョ", lat: "pyo" },
  { jap: "ミャ", lat: "mya" },
  { jap: "ミュ", lat: "myu" },
  { jap: "ミョ", lat: "myo" },
  { jap: "リャ", lat: "rya" },
  { jap: "リュ", lat: "ryu" },
  { jap: "リョ", lat: "ryo" },
];

export default function Katakana() {
  return (
    <div className="container">
      <h1 className={style.title}>
        <p>Katakana</p>
        <p>カタカナ</p>
      </h1>
      <p>
        Katakana is mainly used for foreign words such as foreign names and
        words that have been borrowed from other languages
      </p>
      <h2>Katakana character set</h2>
      <p>Tap on any character to get more information.</p>
      <div className={style.charactersGrid}>
        {katakana.map((letter, index) => {
          return (
            <div
              key={index + "katakana"}
              className={
                index % 10 >= 5
                  ? `${style.characterContainer}`
                  : `${style.characterContainer} ${style.backgroundBlue}`
              }
            >
              <div
                key={index + "katakanaletterjap"}
                className={style.letterJap}
              >
                {letter.jap}
              </div>
              <div
                key={index + "katakanaletterlat"}
                className={style.letterLat}
              >
                {letter.lat}
              </div>
            </div>
          );
        })}
      </div>
      <h2>katakana combinations</h2>
      <div className={style.charactersCombGrid}>
        {katakanaCombinations.map((letter, index) => {
          return (
            <div
              key={index + "katakanacomb"}
              className={
                index % 6 >= 3
                  ? `${style.characterContainer}`
                  : `${style.characterContainer} ${style.backgroundBlue}`
              }
            >
              <div
                key={index + "katakanacombletterjap"}
                className={style.letterJap}
              >
                {letter.jap}
              </div>
              <div
                key={index + "katakanacombletterlat"}
                className={style.letterLat}
              >
                {letter.lat}
              </div>
            </div>
          );
        })}
      </div>
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
          font-family: "Oshidashi";
          font-size: var(--step--1);
        }
        a {
          font-family: "Oshidashi";
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
