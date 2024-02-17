import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Home from "./pages/Home/index.tsx";
import Sobre from "./pages/Sobre/index.tsx";
import Servicos from "./pages/Servicos/index.tsx";
import Contato from "./pages/Contato/index.tsx";
import Servico from "./pages/Servico/index.tsx";

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
      {
        path: "/brasequip/servicos",
        element: <Servicos />,
      },
      {
        path: "/brasequip/contato",
        element: <Contato />,
      },
      {
        path: "/brasequip/servico",
        element: <Servico />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
