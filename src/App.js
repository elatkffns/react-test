import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Ava from "./Ava.png";

function App() {
  return (
    <>
      <div className="snow" />
      <nav>
        <img src={Ava} style={{ maxWidth: "100px" }} alt="avatar img" />
        <ul>
          <li>
            <Link className="link" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="link" to="About">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="Reference">
              Reference
            </Link>
          </li>
          <li>
            <Link className="link" to="contact">
              contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="pWrap">
        <p className="txt">Hello</p>
        <p className="txt">My portfolio</p>
      </div>
      <Outlet />
    </>
  );
}

export default App;
