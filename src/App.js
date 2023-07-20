import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/app.scss";
import "./assets/scss/media.scss";
import "./assets/scss/innerStyle.scss";
import "./assets/scss/adminStyle.scss";
// import Header from "./common/Header";
// import Footer from "./common/Footer";
import AllRoutes from "./Routes/AllRoutes";

import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
});

function App() {
  return (
    <div className="_main">
      <AllRoutes />
    </div>
  );
}

export default App;
