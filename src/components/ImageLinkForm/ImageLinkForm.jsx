import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="f1"></p>
      {
        "This Magic Brain will be detecting faces in your photos. Give it a try!"
      }
      <div>
        <br />
        <input
          className="f4 pa2 w-50 center br4 pa2 input-reset ba bg-transparent hover-bg-black hover-white  "
          type="text"
          onChange={onInputChange}
        />
        <br />
        <button
          className="w-20 grow f4 link ph3 pv2 br4 dib black bg-light-green"
          onClick={onSubmit}
        >
          Detect Face
        </button>
      </div>
    </div>
  );
};
export default ImageLinkForm;
