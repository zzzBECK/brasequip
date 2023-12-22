import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/brasequip/">Home</Link>
        {" | "}
        <Link to="/vite-react-router/teste">Contact</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default App;
