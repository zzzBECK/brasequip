import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Home from "./pages/Home/index.tsx";
import Sobre from "./pages/Sobre/index.tsx";
import Header from "./components/Header/index.tsx";

const router = createBrowserRouter([
  {
    path: "/brasequip/",
    element: <App />,
    children: [
      {
        path: "/brasequip/",
        element: <Home />,
      },
      {
        path: "/brasequip/sobre",
        element: <Sobre />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
