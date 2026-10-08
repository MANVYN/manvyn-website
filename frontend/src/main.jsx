import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);

// const originalError = console.error;

// console.error = (...args) => {
//   if (
//     typeof args[0] === "string" &&
//     args[0].includes("Encountered two children with the same key")
//   ) {
//     debugger;
//   }

//   originalError(...args);
// };
