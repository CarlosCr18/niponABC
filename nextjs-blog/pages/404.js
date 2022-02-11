// pages/404.js
import Link from "next/link";
import Head from "next/head";
export default function Custom404() {
  return (
    <div className="container">
      <Head>
        <title>NiponABC 404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>404 - Page Not Found</h1>
      <Link href="//">
        <a>Return to Login</a>
      </Link>

      <style jsx global>{`
        html,
        body {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          padding: 0;
          margin: 0;
          font-size: clamp(1.09rem, 1.05rem + 0.21vw, 1.2rem);
          font-family: "Oshidashi";
        }
        a {
          color: black;
        }
        .container {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          font-family: "Oshidashi";
        }
      `}</style>
    </div>
  );
}
