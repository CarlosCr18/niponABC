export default function GameDescription({ style }) {
  return (
    <>
      <h1 className={style?.descriptionTitle}>NiponABC</h1>
      <p className={style?.gameDescription}>
        {" "}
        Learn and practice the japanese alphabet playing.
      </p>
      {/* <h2>Game Options</h2>
      <div
        id="gameOptionsShortDescription"
        className={style?.gameOptionsShortDescription}
      >
        <ol className={style?.listText}>
          <li>Add characters to the game with the menus below.</li>
          <li>Start a new game</li>
          <li>Pick the right answers.</li>
          <li>Review your mistakes.</li>
          <li>Have fun!</li>
        </ol>
      </div> */}
    </>
  );
}
