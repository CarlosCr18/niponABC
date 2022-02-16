import style from "./footer.module.css";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.copyright}>
        <p>© Carlos Crespo</p>
      </div>
      <div className={style.developer}>
        <a
          className={style.developerLink}
          aria="Link to creator portfolio"
          href="https://carloscr18.github.io/Portfolio/"
        >
          Website developed by Carlos Crespo
        </a>
      </div>
    </div>
  );
}
