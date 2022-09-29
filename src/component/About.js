import React from "react";

export default function About(props) {
  let mystyle = {
    background: props.mode === "dark" ? "#636566" : "white",
    color: props.mode === "dark" ? "white" : "#636566",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "white" : "#636566",
  };

  return (
    <div className="accordion" id="accordionExample" style={mystyle}>
      <h1>About Us</h1>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            style={mystyle}
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Changes The Text
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div
            className="accordion-body"
            style={mystyle}
          >
            <strong>This app changes the text very quickly and easily</strong>{" "}
            Here it is able to change the text in uppercase and lowercase
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            style={mystyle}
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Clear The Text and Removes extra spaces
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div
            className="accordion-body"
            style={mystyle}
          >
            <strong>
              This app also clear the text and remove the extra spaces
            </strong>{" "}
            Here it is able to clear the text and remove extra spaces
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            style={mystyle}
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Word Count And Display Previews
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div
            className="accordion-body"
            style={mystyle}
          >
            <strong>This app count words and display the previews</strong> Here
            it is able to display word count and display the preview
          </div>
        </div>
      </div>
    </div>
  );
}
