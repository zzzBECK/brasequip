import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Home from "./pages/Home/index.tsx";

const router = createBrowserRouter([
  {
    path: "/brasequip/",
    element: <App />,
    children: [
      {
        path: "/brasequip/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
