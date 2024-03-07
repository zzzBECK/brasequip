import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TransitioningOutlet from "./components/TransitioningOutlet";
import { useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Global duration of animations in milliseconds
    });
  }, []);

  return (
    <>
      <Header />
      <TransitioningOutlet />
      <Footer />
      <div
        style={{
          position: "fixed",
          zIndex: 10000,
          right: "20px",
          bottom: "20px",
        }}
      >
        <IoLogoWhatsapp
          size={"3rem"}
          color={"green"}
          className="whatsapp"
          alt="Chat on WhatsApp"
          onClick={() =>
            window.open(
              "https://wa.me//556181750558?text=Gostaria%20de%20fazer%20um%20orçamento%20por%20favor!",
              "_blank"
            )
          }
        />
      </div>
    </>
  );
}

export default App;
