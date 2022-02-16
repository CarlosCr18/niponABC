import style from "../characterSet.module.css";
import Table from "../tableComponents/languageTableComponent.js";
import TableComb from "../tableComponents/languageCombTableComponent.js";
import NavBar from "../navigationBar/navigationBar";
import Head from "next/head";
import Footer from "../footer/footer.js";
import { hiragana } from "../languageDatabase.js";
import { hiraganaCombinations } from "../languageDatabase.js";

export default function Hiragana() {
  return (
    <div className="container">
      <Head>
        <title>NiponABC Hiragana</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
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
          position: relative;
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
          padding-bottom: 10rem;
          gap: 1rem;
        }
        .container p {
          width: min(50ch, 90%);
          word-break: break-word;
          text-align: center;
        }
        .container h1 p {
          width: 100%;
        }
        h2 {
          padding-top: 1rem;
          margin: 0;
        }
      `}</style>
      <Footer />
    </div>
  );
}
