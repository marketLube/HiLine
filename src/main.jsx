import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./style.css";
import App from "./App.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ParallaxProvider>
      <div className="relative">
        <App />
        <Footer />
      </div>
    </ParallaxProvider>
  </StrictMode>
);
