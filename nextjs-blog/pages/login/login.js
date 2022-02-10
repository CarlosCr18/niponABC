import Link from "next/link";
import style from "./login.module.css";

export default function LoginFunction() {
  return (
    <div className={style.container}>
      <div className={style.loginContainer}>
        <div className={style.loginInputContainer}>
          <label className={style.loginLabel}>Username</label>
          <input type="text" className={style.loginInput}></input>
          <label className={style.loginLabel}>Password</label>
          <input type="text" className={style.loginInput}></input>
          <button className={style.loginButton}>Login</button>
          <Link href="/subscribe">
            <a>Create account</a>
          </Link>
          <Link href="/recover">
            <a>Forgot password</a>
          </Link>
        </div>
        <div className={style.loginContainerFree}>
          <Link href="/game">
            <a className={style.loginButton}>Use without account</a>
          </Link>
        </div>
      </div>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  );
}
