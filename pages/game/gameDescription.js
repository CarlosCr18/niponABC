export default function GameDescription({ style }) {
  return (
    <>
      <h1>The game</h1>
      <p className={style?.gameDescription}>
        {" "}
        This site was created so anyone who wants to learn or practice the
        japanse alphabet can do it in an interactive manner.
      </p>
      <h2>Game Options</h2>
      <div
        id="gameOptionsShortDescription"
        className={style?.gameOptionsShortDescription}
      >
        <ol>
          <li>Add characters to the game with the menus below.</li>
          <li>Start a new game</li>
          <li>Pick the right answers.</li>
          <li>Review your mistakes.</li>
          <li>Have fun!</li>
        </ol>
      </div>
      <div
        id="gameOptionsFullDescription"
        className={style?.gameOptionsFullDescription}
      >
        <ul>
          <li>
            To add a complete alphabet you can click on the "select all"
            buttons.
          </li>
          <li>
            To delete a complete alphabet you can click on the "clear all"
            buttons.
          </li>
          <li>
            If you want to choose each specific character you can do it with the
            "open list" buttons.
            <ul>
              <li>Tap on any character you want to select it.</li>
              <li>Tap again on it to unselect it.</li>
              <li>
                Once you have selected all the characters you need use the "Add
                characters" button
              </li>
              <li>
                If you have selected any characters from an alphabet the
                background color will change to green.
              </li>
            </ul>
          </li>
          <li>To start playing just tap on the "Start game" button</li>
          <li>
            One character will fly through the game screen and you will have to
            choose between the three options below, tap on the correct one to
            get a point
          </li>
          <li>
            To end the game use the "Stop game" button or end with the
            characters list
          </li>
          <li>
            When the game ends all your mistakes will be listed below the game,
            tap on any character to get more information about it
          </li>
          <li>Have fun!</li>
        </ul>
      </div>
      <button
        className={style?.learnMoreButton}
        onClick={({ target }) => {
          document
            .getElementById("gameOptionsFullDescription")
            .classList.add(style?.inflate);
          document
            .getElementById("gameOptionsShortDescription")
            .classList.add(style?.deflate);
          target.style.display = "none";
        }}
      >
        Learn more...
      </button>
    </>
  );
}
