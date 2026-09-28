import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./routes/index";
import "./styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Portfolio root element was not found.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
