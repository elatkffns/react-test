import React from "react";
import "./App.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import Ava from "./Ava.png";
import Svg from "./comp/svg";

export default function App() {
  const location = useLocation();
  return (
    <>
      <nav>
        <img src={Ava} alt="avatar img" className="ava" />
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
          <span className="txt txtani">my portfolio</span>
          <span className="border" />
          <span className="txt">{}</span>
        </div>
      ) : (
        <Outlet />
      )}
      <div className="snow" />
      <Svg />
    </>
  );
}
