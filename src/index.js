import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import store from "./store/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastContainer
      limit={3}
      position="top-center"
      style={{
        width: "400px",
      }}
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      draggable
      transition={Slide}
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
