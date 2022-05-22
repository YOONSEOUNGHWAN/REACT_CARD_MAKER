import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AuthService from "./service/auth_service";

const root = ReactDOM.createRoot(document.getElementById("root"));
const authService = new AuthService();
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App authService={authService}/>
    </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
