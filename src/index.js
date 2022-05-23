import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageInput from "./components/Button/img_button";

const root = ReactDOM.createRoot(document.getElementById("root"));
const authService = new AuthService();
const imageUploader = new ImageUploader();
// 컴포넌트화
const FileInput = props =>(<ImageInput {...props} imageUploader={imageUploader}/>)
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* 컴포넌트 prop */}
      <App authService={authService} FileInput={FileInput}/>
    </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
