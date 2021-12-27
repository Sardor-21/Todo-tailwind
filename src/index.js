import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
