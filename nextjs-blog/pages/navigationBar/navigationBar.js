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
          <Link href="/game">
            <a>Game</a>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="/hiragana">
            <a>Hiragana</a>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="/katakana">
            <a>Katakana</a>
          </Link>
        </div>
      </div>
      <div className={styles.account}>
        <Link href="/">
          <a>Login/Account</a>
        </Link>
      </div>
    </nav>
  );
}
