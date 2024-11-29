import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CountProvider from "./context/count.context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>
);
