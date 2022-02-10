import styles from "./navigation.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <img
        className={styles.logo}
        src=""
        alt="logo"
        height="2rem"
        width="2rem"
      />
      <div className={styles.linksContainer}>
        <div className={styles.link}>
          <Link href="/game/game">
            <a>Game</a>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="/hiragana/hiragana">
            <a>Hiragana</a>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="/katakana/katakana">
            <a>Katakana</a>
          </Link>
        </div>
      </div>
      <div className={styles.account}>
        <Link href="/login/login">
          <a>Login/Account</a>
        </Link>
      </div>
    </nav>
  );
}
