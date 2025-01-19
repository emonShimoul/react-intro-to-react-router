import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="about" element={<div>Hello from About!!</div>} />
      <Route path="contact" element={<div>Hello from Contact!!</div>} />
    </Routes>
  </BrowserRouter>
);
