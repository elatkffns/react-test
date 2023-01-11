import React from "react";
import "./App.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import Ava from "./Ava.png";
import Svg from "./comp/svg";

function App() {
  const location = useLocation();

  return (
    <>
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
      {location.pathname === "/" ? (
        <div className="txtbox">
          <p className="txt">Welcome</p>
          <p className="txt">My portfolio</p>
        </div>
      ) : (
        <Outlet />
      )}
      <div className="snow" />
      <Svg />
    </>
  );
}

export default App;
