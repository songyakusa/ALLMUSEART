import "./sad.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import "../ranbow.scss";

import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import i18next from "i18next";

class index extends React.Component {
  handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  render() {
    const { t } = this.props;
    return (
      <div id="Home">
        {/* <div className="hero-container Video"> */}
        <video autoPlay muted loop>
          <source src="Picture/Home/video3.mp4" type="video/mp4" />
        </video>
        {/* </div> */}

        <Container>
          <div className="back container">
            <div className="fontback box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div class="content ">
                <p>
                  WELCOME <br /> ALLMUSEART
                </p>
              </div>
            </div>
          </div>
        </Container>
        <div className="front ">
          <Container>
            <Row>
              <Col lg={6}>
                <h1>{t('Home.1')}</h1>
              </Col>
              <Col lg={6}>
                <p className="padding ">{t('Home.2')}<br/>{t('Home.3')}
                </p>
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
