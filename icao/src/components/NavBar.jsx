import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/icao-logo.svg";

const NavBar = () => {
  return (
    <div>
      <img
        src={logo}
        alt="logo"
        style={{
          height: "75px",
          paddingLeft: "300px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#0054A4", padding: "20px 20px" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <a className="nav-link text-white" href="#">
                State Letter Viewer
              </a> */}

              <Link className="nav-link text-white" to="/stateletter/slview">
                State Letter Viewer
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                State Letter
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/parser">
                  State letter parser
                </Link>
                <Link className="dropdown-item" to="/stateletter/slview">
                  State Letter Viewer
                </Link>
                <Link className="dropdown-item" to="/track">
                  State letter tracking
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                States
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/stateletter/state">
                  SL Comments By States
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown3"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                State Letter Analysis
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/stateletter/secretriat">
                  Secretariat Analysis
                </Link>
                <Link className="dropdown-item" to="/stateletter/anc">
                  Final Review by ANC
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
