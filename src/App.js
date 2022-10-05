import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const notifyTrue = () =>
  toast("Correct", {
    icon: "😉",
  });
const notifyFalse = () =>
  toast("Wrong", {
    icon: "😔",
  });
function App() {
  const getColorHash = () => {
    var letters = "0123456789ABCDEF";
    var color = "";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [arr, setArr] = useState([]);
  const [color, setColor] = useState("");
  const evaluateAnswer = (givenColor) => {
    if (givenColor === color) {
      notifyTrue();
    } else {
      notifyFalse();
    }
  };
  useEffect(() => {
    const actualColor = getColorHash();
    setColor(actualColor);

    setArr(
      [actualColor, getColorHash(), getColorHash(), getColorHash()].sort(
        () => Math.random() - 0.5
      )
    );
  }, []);
  return (
    <div className={`App`}>
      <div className="games">
      <h1 style={{color: '#fff'}}>Guess the color</h1>
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
      </div>
      <footer className="footer" style={{color: '#fff'}}>
        Made with 🤍 by <a style={{color: '#fff'}} href="https://www.linkedin.com/in/c-srikanth/" target="_blank">Srikanth Cheruku</a>
      </footer>
    </div>
  );
}

export default App;
