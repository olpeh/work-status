import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

const rootElement = document.getElementById("work-root");
const root = createRoot(rootElement!); // eslint-disable-line

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
