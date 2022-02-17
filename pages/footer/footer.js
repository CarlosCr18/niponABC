import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.copyright}>
        <p>© Carlos Crespo</p>
      </div>
      <div className={style.developer}>
        <a
          className={style.developerLink}
          target="_blank"
          aria="Link to creator portfolio"
          href="https://carloscr18.github.io/Portfolio/"
        >
          Website developed by Carlos Crespo
        </a>
      </div>
    </footer>
  );
}
