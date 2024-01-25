import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TransitioningOutlet from "./components/TransitioningOutlet";

function App() {
  return (
    <>
      <Header />
      <TransitioningOutlet />
      <Footer />
    </>
  );
}

export default App;
