import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./errorPage";
import About from "./comp/about";
import Reference from "./comp/Reference";
import Contact from "./comp/contact";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Reference",
          element: <Reference />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
