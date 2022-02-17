import styles from "./navigation.module.css";
import Link from "next/link";

export default function NavBar() {
  const user = false;
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src="/images/logo.jpg" alt="logo" />
      <div className={styles.linksContainer}>
        <div className={styles.link}>
          <Link href="/">
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
      {user ? (
        <div className={styles.account}>
          <Link href="/">
            <a>Login/Account</a>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}
