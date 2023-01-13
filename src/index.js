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

const router = createBrowserRouter([
  {
    path: "https://elatkffns.github.io/react-test/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "https://elatkffns.github.io/react-test/About",
        element: <About />,
      },
      {
        path: "https://elatkffns.github.io/react-test/Reference",
        element: <Reference />,
      },
      {
        path: "https://elatkffns.github.io/react-test/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
