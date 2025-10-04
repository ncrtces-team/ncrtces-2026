import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { PreAckApp, PostAckApp } from "./App.jsx";

ReactDOM.createRoot(document.getElementById("pre-ack-root")).render(
  <React.StrictMode>
    <PreAckApp />
  </React.StrictMode>
);

// Render the second part of the application into 'post-ack-root'
ReactDOM.createRoot(document.getElementById("post-ack-root")).render(
  <React.StrictMode>
    <PostAckApp />
  </React.StrictMode>
);
