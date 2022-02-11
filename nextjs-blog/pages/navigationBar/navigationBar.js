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
        <div className={styles.link} prefetch={false}>
          <Link href="/game">
            <a>Game</a>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="/hiragana" prefetch={false}>
            <a>Hiragana</a>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="/katakana" prefetch={false}>
            <a>Katakana</a>
          </Link>
        </div>
      </div>
      <div className={styles.account}>
        <Link href="/" prefetch={false}>
          <a>Login/Account</a>
        </Link>
      </div>
    </nav>
  );
}
