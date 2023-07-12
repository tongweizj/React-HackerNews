import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home, { loader as homeLoader } from "./routers/home.jsx";
import News, { loader as pageLoad } from "./routers/news.jsx";
import ErrorPage from "./error-page.jsx";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: homeLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/news/:pageId",
    element: <News />,
    loader: pageLoad,
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
