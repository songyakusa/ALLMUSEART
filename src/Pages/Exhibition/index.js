import React, { Component } from "react";
import "./style.scss";
import { Container, Row, Col } from "react-bootstrap";
import "../ranbow.scss";
import { Animated } from "react-animated-css";

import { withTranslation } from "react-i18next";
import i18next from "i18next";

class index extends React.Component {
  state = {
    nav: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.pageYOffset > 150) {
      this.setState({ nav: true });
    } else {
      this.setState({ nav: false });
    }
  };
  handleClick(lang) {
    i18next.changeLanguage(lang);
  }
  render() {
    const { t } = this.props;
    return (
      <div>
        <div id="Exhibition" className="backgroud">
          <div className="Exhibition-text">
            <h1>{t("Exhibition.1")}</h1>
            <p>{t("Exhibition.2")}<br/>{t("Exhibition.3")}</p>
          </div>

          {/* Photo Grid */}
          <Container>
            <Row>
              <Col lg={3} style={{ paddingLeft: "0px", paddingRight: "10px" }}>
                <Animated
                  animationIn="zoomIn"
                  animationOut="zoomOut"
                  animationInDuration={1000}
                  animationOutDuration={1000}
                  isVisible={this.state.nav}
                >
                  <img
                    src="Picture/Exhibition/col1t1.jpg"
                    className="imgpadding"
                  />
                  <img
                    src="Picture/Exhibition/col1t2.jpg"
                    className="imgpadding"
                  />
                  <img
                    src="Picture/Exhibition/col1t3.jpg"
                    className="imgpadding"
                  />
                  <img
                    src="Picture/Exhibition/col1t4.jpg"
                    className="imgpadding"
                  />
                </Animated>
              </Col>
              <Col lg={3} style={{ paddingLeft: "0px", paddingRight: "10px" }}>
                <Animated
                  animationIn="slideInUp"
                  animationOut="slideOutDown"
                  animationInDuration={1000}
                  animationOutDuration={1000}
                  isVisible={this.state.nav}
                >
                  <img
                    src="Picture/Exhibition/col2t1.jpg"
                    className="imgpadding"
                  />
                  <img
                    src="Picture/Exhibition/col2t2.jpg"
                    className="imgpadding"
                  />
                  <img
                    src="Picture/Exhibition/col2t3.jpg"
                    className="imgpadding"
                  />
                  <img
                    src="Picture/Exhibition/col2t4.jpg"
                    className="imgpadding"
                  />
                </Animated>
              </Col>
              <Col lg={3} style={{ paddingLeft: "0px", paddingRight: "10px" }}>
                <Animated
                  animationIn="slideInUp"
                  animationOut="slideOutDown"
                  animationInDuration={1000}
                  animationOutDuration={1000}
                  isVisible={this.state.nav}
                >
                  <img
                    src="Picture/Exhibition/col3t1.jpg"
                    className="imgpadding"
                  />
                  <img
                    src="Picture/Exhibition/col3t2.jpg"
                    className="imgpadding"
                  />
                  <img
                    src="Picture/Exhibition/col3t3.jpg"
                    className="imgpadding"
                  />
                  <img
                    src="Picture/Exhibition/col3t4.jpg"
                    className="imgpadding"
                  />
                  <img
                    src="Picture/Exhibition/col3t5.jpg"
                    className="imgpadding"
                  />
                </Animated>
                {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKoyjFzhIR0o4KKUZvaXOc4ucJvx3fYEBTZx1OKIuZaHDLoHV"
                style={{ width: "100%" }}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIOn2pL6QU4ScGaqBbw_o-_k4troQOLp2TswdZEMIXX986q1s"
                style={{ width: "100%" }}
              /> */}
              </Col>
              <Col lg={3} style={{ paddingLeft: "0px", paddingRight: "10px" }}>
                <Animated
                  animationIn="zoomIn"
                  animationOut="zoomOut"
                  animationInDuration={1000}
                  animationOutDuration={1000}
                  isVisible={this.state.nav}
                >
                  <img
                    src="Picture/Exhibition/col4t1.jpg"
                    className="imgpadding"
                  />
                  <img
                    src="Picture/Exhibition/col4t2.jpg"
                    className="imgpadding"
                  />
                  <img
                    src="Picture/Exhibition/col4t3.jpg"
                    className="imgpadding"
                  />
                  <img
                    src="Picture/Exhibition/col4t4.jpg"
                    className="imgpadding"
                  />
                </Animated>
              </Col>
            </Row>
          </Container>
        </div>

        <hr class="rainbow"></hr>
      </div>
    );
  }
}
export default withTranslation()(index);
