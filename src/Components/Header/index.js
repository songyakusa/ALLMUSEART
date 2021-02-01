import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import i18next from "i18next";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./sty.scss";
import { Link } from "react-scroll";

class Header extends Component {
  handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  render() {
    const { t } = this.props;

    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="navbar"
          fixed="top"
          id="navbar"
        >
          <Link to="Home" spy={true} smooth={true}>
            <Navbar.Brand>
              <div className="logo">
                <img alt="" src="Picture/logo/allmuseart.png" />{" "}
              </div>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto manu-padding ">
              <Link to="Home" spy={true} smooth={true}>
                <Nav.Link>
                  <p className="effect-underline">{t("Naverbar.1")}</p>
                </Nav.Link>
              </Link>
              <Link to="Exhibition" spy={true} smooth={true}>
                <Nav.Link>
                  {" "}
                  <p className="effect-underline">{t("Naverbar.2")}</p>
                </Nav.Link>
              </Link>
              <Link to="Technology" spy={true} smooth={true}>
                <Nav.Link>
                  {" "}
                  <p className="effect-underline">{t("Naverbar.3")}</p>
                </Nav.Link>
              </Link>
              <Link to="About" spy={true} smooth={true}>
                <Nav.Link>
                  {" "}
                  <p className="effect-underline">{t("Naverbar.4")}</p>
                </Nav.Link>
              </Link>
              <Link to="Contact" spy={true} smooth={true}>
                <Nav.Link>
                  {" "}
                  <p className="effect-underline">{t("Naverbar.5")}</p>
                </Nav.Link>
              </Link>

              <Nav.Link>
                <img
                  onClick={() => this.handleClick("th")}
                  style={{ height: "5vh", paddingBottom: "0.7vw" ,paddingRight:"0.5vw" }}
                  alt=""
                  src="Picture/logo/th.png"
                />
                |
                <img
                  onClick={() => this.handleClick("en")}
                  style={{ height: "5vh", paddingBottom: "0.7vw", paddingLeft:"0.5vw" }}
                  alt=""
                  src="Picture/logo/us.png"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withTranslation()(Header);
