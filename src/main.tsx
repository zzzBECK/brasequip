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
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/servicos",
        element: <Servicos />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/servico/:type",
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
