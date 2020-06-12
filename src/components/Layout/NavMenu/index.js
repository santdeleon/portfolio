import React from "react";
import { array, bool, func, string, object } from "prop-types";
import { Navbar, Nav } from "react-bootstrap";

import NavLink from "./NavLink";

import "./index.css";

import GithubLight from "../../../assets/img/github-light.svg";
import GithubDark from "../../../assets/img/github-dark.svg";
import Sun from "../../../assets/img/sun.svg";
import Moon from "../../../assets/img/moon.svg";

const propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  particles: object.isRequired,
  showSidebar: bool.isRequired,
  toggleSidebar: func.isRequired,
  navData: array.isRequired
};

const defaultProps = {
  theme: "light",
  toggleTheme: () => {},
  particles: {},
  showSidebar: false,
  toggleSidebar: () => {},
  navData: []
};

const NavMenu = ({
  theme,
  toggleTheme,
  particles,
  showSidebar,
  toggleSidebar,
  navData
}) => {
  const refreshParticles = () => {
    const particleColor = theme === "light" ? "#B8BABE" : "#222";

    particles.init({
      color: particleColor,
      speed: 0.2
    });
  };

  const menuBarColor =
    theme === "light"
      ? {
          backgroundColor: "#000",
          borderColor: "#000"
        }
      : {
          backgroundColor: "#fff",
          borderColor: "#fff"
        };

  return (
    <div className="NavMenu">
      <Navbar>
        <Navbar.Brand
          href="https://santdeleon.io"
          aria-label="Home"
          title="Home"
          style={theme === "light" ? { color: "#000" } : { color: "#fff" }}
        >
          <span role="img" aria-label="Rainbow Emoji">
            🌈
          </span>{" "}
          Sant Deleon
        </Navbar.Brand>
        <Nav className="mr-auto d-none d-md-flex">
          {navData.map(link => (
            <NavLink
              className="mr-2"
              key={link.id}
              name={link.name}
              href={link.href}
              icon={link.icon}
              theme={theme}
            />
          ))}
        </Nav>
        <Nav className="ml-auto">
          <span
            className={`toggle-button d-block d-md-none ${showSidebar &&
              "button-open"}`}
            onClick={toggleSidebar}
          >
            <div className="menu-bar menu-bar-top" style={menuBarColor}></div>
            <div
              className="menu-bar menu-bar-middle"
              style={menuBarColor}
            ></div>
            <div
              className="menu-bar menu-bar-bottom"
              style={menuBarColor}
            ></div>
          </span>
          <a
            href="https://github.com/santdeleon"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
            title="Github"
            aria-label="Github"
          >
            {theme === "light" ? (
              <img src={GithubLight} alt="Github" />
            ) : (
              <img src={GithubDark} alt="Github" />
            )}
          </a>
          <div>
            <span
              role="button"
              onClick={() => {
                toggleTheme();
                refreshParticles();
              }}
              title="Dark/Light Mode"
              aria-label="Dark/Light Mode"
            >
              {theme === "dark" ? (
                <img src={Sun} alt="Light Mode" />
              ) : (
                <img src={Moon} alt="Dark Mode" />
              )}
            </span>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
};

NavMenu.propTypes = propTypes;
NavMenu.defaultProps = defaultProps;
export default NavMenu;
