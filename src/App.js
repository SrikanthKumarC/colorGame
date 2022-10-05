import "./App.css";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { notifyFalse, notifyTrue, getRandomColorHash } from "./lib/utils";

function App() {

  const [arr, setArr] = useState([]);
  const [color, setColor] = useState("");
  const evaluateAnswer = (givenColor) => {
    if (givenColor === color) {
      notifyTrue();
    } else {
      notifyFalse();
    }
  };
  const [again, setAgain] = useState(false);
  useEffect(() => {
    const actualColor = getRandomColorHash();
    setColor(actualColor);

    setArr(
      [actualColor, getRandomColorHash(), getRandomColorHash(), getRandomColorHash()].sort(
        () => Math.random() - 0.5
      )
    );
  }, [again]);
  return (
    <div className={`App`}>
      <div className="games">
        <h1 style={{ color: "#fff" }}>Guess the color</h1>
        <div className="color" style={{ background: `#${color}` }}></div>
        <div className="options">
          {console.log(arr)}
          {arr.map((eachColor, key) => {
            return (
              <button key={key} onClick={() => evaluateAnswer(eachColor)}>
                #{eachColor}
              </button>
            );
          })}
          <Toaster />
        </div>
        <button className="try" onClick={() => setAgain(!again)}>
          ✨ Try New Color
        </button>
      </div>
      <footer className="footer" style={{ color: "#fff" }}>
        Made with 🤍 by{" "}
        <a
          style={{ color: "#fff" }}
          href="https://www.linkedin.com/in/c-srikanth/"
          target="_blank"
          rel="noreferrer"
        >
          Srikanth Cheruku
        </a>
      </footer>
    </div>
  );
}

export default App;
