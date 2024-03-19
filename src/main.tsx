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
import { ThemeProvider } from "./ThemeContext.tsx";

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

const rootElement = document.getElementById("root");

// Check if the root element exists and is an HTMLElement
if (!(rootElement instanceof HTMLElement)) {
  throw new Error("No root element found");
}

// Now we are sure that rootElement is not null
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
