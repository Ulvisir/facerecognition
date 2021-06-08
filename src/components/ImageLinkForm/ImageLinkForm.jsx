import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f1"></p>
      {
        "This Magic Brain will be detecting faces in your photos. Give it a try!"
      }
      <div>
        <br />
        <input className="f4 pa2 w-50 center br4 " type="text" />
        <br />
        <button className="w-20 grow f4 link ph3 pv2 br4 dib white bg-light-green">
          Detect Face
        </button>
      </div>
    </div>
  );
};
export default ImageLinkForm;
