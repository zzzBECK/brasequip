import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TransitioningOutlet from "./components/TransitioningOutlet";
import { useEffect } from "react";

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
    </>
  );
}

export default App;
