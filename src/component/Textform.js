import React, { useState } from "react";

export default function TextForm(props) {
  const Handleuptrim = () => {
    let newText = text.trim();
    setText(newText);
    props.showAlert(" Text has been trimmed!","success");
  };
  const Handleupclear = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Text has been cleard","success");
  };
  const Handleupclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase","success");
  };
  const Handleonclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase","success");
  };

  const Handleonchange = (event) => {
    setText(event.target.value);
  };

  const Handleupcopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Text has been copied","success");
  };

  const Handleupspace = () => {
    let newtext = text.split(/[" "]+/);
    setText(newtext.join());
    props.showAlert(" Extra spaces has been removed","success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container ">
        <div className="mb-3 m-3" style={{color: props.mode==="dark"?"white":"black"}}>
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="text"
            rows="10"
            value={text}
            onChange={Handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode==="dark"?"white":"black"
            }}
          ></textarea>
        </div>
        <button
          type="button"
          disabled={text.length===0}
          className="btn btn-primary mx-3 my-2"
          onClick={Handleonclick}
        >
          ToUpperCase
        </button>
        <button
          type="button"
          disabled={text.length===0}
          className="btn btn-primary mx-3 my-2"
          onClick={Handleupclick}
        >
          ToLowerCase
        </button>
        <button
          type="button"
          disabled={text.length===0}
          className="btn btn-primary mx-3 my-2"
          onClick={Handleupclear}
        >
          Clear
        </button>
        <button
          type="button"
          disabled={text.length===0}
          className="btn btn-primary mx-3 my-2"
          onClick={Handleuptrim}
        >
          Trim
        </button>
        <button
          type="button"
          disabled={text.length===0}
          id="btncopy"
          className="btn btn-primary mx-3 my-2"
          onClick={Handleupcopy}
        >
          Copy
        </button>
        <button
          type="button"
          disabled={text.length===0}
          id="btncopy"
          className="btn btn-primary mx-3 my-2"
          onClick={Handleupspace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
