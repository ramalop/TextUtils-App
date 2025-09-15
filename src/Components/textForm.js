import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const copyText = () => {
    const textarea = document.getElementById("exampleFormControlTextarea1");
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    document.getSelection().removeAllRanges()
    props.showAlert("Copied to clipboard", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container my-5"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
        }}
      >
        <h3 className="my-4">{props.heading}</h3>
        <div className="form-group mb-3">
          <textarea
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearText}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeSpace}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((ele) => ele.length !== 0).length} words and{" "}
          {text.length}characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((ele) => ele.length !== 0).length}{" "}
          minutes Read
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
