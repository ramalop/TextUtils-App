import React, { useEffect, useState, useRef } from "react";

const TypingTest = (props) => {
  const [inputText, setInputText] = useState("");
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const [accuracy, setAccuracy] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [time, setTime] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    // When time hits 0, calculate WPM and Accuracy
    if (time === 0 && isRunning) {
      props.showAlert("Time's up!", "info");
      setIsRunning(false);
      setIsFinished(true);

      // WPM calculation
      const timeElapsed = (30 - time) / 60;
      const wordsTyped =
        inputText.trim() === "" ? 0 : inputText.trim().split(/\s+/).length;

      setWpm(Math.round(wordsTyped / timeElapsed));

      // REAL CHARACTER-BASED ACCURACY
      let correctChars = 0;
      const totalChars = text.length;

      for (let i = 0; i < Math.min(inputText.length, text.length); i++) {
        if (inputText[i] === text[i]) {
          correctChars++;
        }
      }

      const acc = Math.round((correctChars / totalChars) * 100);
      setAccuracy(acc);
    }

    return () => clearInterval(timer);
  }, [isRunning, time, inputText, text, props]);

  const startTest = () => {
    setText(
      "When we talk about motivating others, the justification is the end result (either we want to avoid the pain or go towards pleasure) or what we want to get the person to do. How we achieve the end result, are our alternatives."
    );

    inputRef.current.focus();
    props.showAlert("Test Started", "success");

    setInputText("");
    setIsRunning(true);
    setIsFinished(false);
    setTime(30);
    setWpm(0);
    setAccuracy(0);
  };

  const restartTest = () => {
    setInputText("");
    setText("");
    setAccuracy(0);
    setWpm(0);
    setTime(30);
    setIsRunning(false);
    setIsFinished(false);
    props.showAlert("You can start a new test", "success");
  };

  return (
    <div
      className={`container my-5 d-flex flex-column align-items-center text-${
        props.mode === "light" ? "dark" : "light"
      }`}
    >
      <h2>Typing Test</h2>
      <p className="my-3">{text}</p>

      <div className="container d-flex flex-column align-items-center form-floating my-3">
        <textarea
          className="form-control"
          ref={inputRef}
          placeholder="Start typing here..."
          id="floatingTextarea2"
          value={inputText}
          disabled={!isRunning || time === 0}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
      </div>

      <div className="container my-2 timer d-flex flex-column align-items-center">
        Time: {time}s
      </div>

      <button
        className="btn btn-primary"
        onClick={startTest}
        disabled={isRunning || isFinished}
      >
        Start Test
      </button>

      {isFinished && (
        <div
          id="Results"
          className="container my-5 d-flex flex-column align-items-center"
        >
          <h3>Your Results:</h3>
          <div id="WPM">Words Per Minute: {wpm}</div>
          <div id="Accuracy">Accuracy: {accuracy}%</div>
          <button className="btn btn-primary my-3" onClick={restartTest}>
            Restart Test
          </button>
        </div>
      )}
    </div>
  );
};

export default TypingTest;
