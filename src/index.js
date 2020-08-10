import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import New from "./New";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <br />
      <div className="row">
        <div className="col-sm-6">
          <App />
        </div>
        <div className="col-sm-6">
          <New />
        </div>
      </div>
    </div>
  </React.StrictMode>,
  rootElement
);
