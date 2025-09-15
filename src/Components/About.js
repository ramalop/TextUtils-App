
export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(4 64 112)" : "white",
    border:"2px solid",
    borderColor:props.mode === "dark"?"white":"rgb(4 64 112)"
  };
  return (
    <div className="container my-5">
      <h1 className="my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>About TextUtils</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a simple yet powerful React-based utility app that
              helps you format and analyze your text efficiently. Whether you
              need to remove extra spaces, change case, or count words and
              characters, TextUtils provides quick and accurate results.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Why Use TextUtils?</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is designed for students, writers, and professionals who
              work with text daily. With just a click, you can transform your
              text, clean up formatting, and prepare it for emails, articles, or
              coding tasks.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Features</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <ul>
                <li>Content Writers to format blog drafts</li>
                <li>Remove extra spaces and tidy up paragraphs</li>
                <li>Count words and characters in real time</li>
                <li>Copy text to clipboard with one click</li>
                <li>User-friendly, fast, and responsive design</li>
                <li>Monitor your typing speed and accuracy in real time.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
