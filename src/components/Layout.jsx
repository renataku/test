import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";

const paths = [
  { path: "/", name: "Home" },
  { path: "/enumeration", name: "Enumeration" },
];

const date = new Date().getFullYear();

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <ul>
          {paths.map((path) => {
            return (
              <li>
                <Link to={path.path}>{path.name}</Link>
              </li>
            );
          })}
        </ul>
      </header>
      <div className="content">{children}</div>
      <footer>testas &copy; {date}</footer>
    </div>
  );
};

export default Layout;
