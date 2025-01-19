import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
// import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Users from "./components/Users/Users.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="users" element={<Users />} />
      </Route>

      {/* <Route path="header" element={<div>Hello from Header!!</div>} /> */}
    </Routes>
  </BrowserRouter>
);
