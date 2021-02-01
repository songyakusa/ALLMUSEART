import React from "react";
import "./styleContact.scss";
import "../ranbow.scss";

import { Container, Row, Col } from "react-bootstrap";

export default function index() {
  return (
    <div id="Contact" className="textContact">
      <footer>
        <Container>
          <Row>
            <nav className="footer-inner">
              <Col>
                <section className="footer-item">
                  <img
                    alt=""
                    src="Picture/logo/logo.png"
                    width="70px"
                    height="70px"
                  />{" "}
                  <h2>
                    CONTACT US
                    <br />
                    <b className="color">ALLMUSEART</b>
                  </h2>
                </section>
              </Col>
              <Col>
                <section className="footer-item">
                  <h3>บริษัท ออลล์เว็บ เทคโนโลยี่ จำกัด</h3>
                  <h3>สาขาปทุมธานี</h3>
                  <ul>
                    <li>
                      <a>
                        148/80 หมู่ 1 ต.บ้านกลาง
                        <br />
                        อ.เมืองปทุมธานี จ.ปทุมธานี 1200
                        <br />
                        โทร.081-5359230 , 099-2863635
                      </a>
                    </li>
                  </ul>
                  <h3>สาขานครราชสีมา</h3>
                  <ul>
                    <li>
                      <a>
                        3279/24 ถ.สืบศิริ ต.ในเมือง
                        <br />
                        อ.เมือง จ.นครราชสีมา 30000
                        <br />
                        โทร.044-353-569, 044-353-298
                        <br />
                        มือถือ 081-535-9230
                      </a>
                    </li>
                  </ul>
                </section>
              </Col>
              <Col>
                <section className="footer-item">
                  <h3>Allweb technology Company Limited</h3>
                  <ul>
                    <li>
                      <a>
                        148/80 Moo 1 Banklang,
                        <br />
                        Mueng Pathum Thani, <br />
                        Pathum Thani 12000 <br />
                        3279/24 Suebsiri Rd., <br />
                        T.Nimueng,A.Mueng,
                        <br />
                        NakhonRatchasima, Thailand 30000
                        <br />
                        E-mail :allweb.technology@gmail.com
                        <br />
                        Tel. +6644353569,+6644353298,
                        <br />
                        +66815359230
                        <br />
                        ID Line : allwebcctv
                      </a>
                    </li>
                  </ul>
                </section>
              </Col>

              <Col>
                <ul>
                  <li>
                    <img
                      src="Picture/Footer/qrcord.jpg"
                      width="150px"
                      height="150px"
                    />
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="https://line.me/R/ti/p/%40hua8211q">
                      <img
                        src="Picture/Footer/line.png"
                        width="75px"
                        height="30px"
                      />
                    </a>
                    <a href="https://www.facebook.com/allwebtechnology/">
                      <img
                        src="Picture/Footer/facebook.jpg"
                        width="72px"
                        height="30px"
                      />
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>
                    <a>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3136.8921940858886!2d102.05722!3d14.958632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7452cdb34eed27fe!2sAll%20Web%20Technology!5e1!3m2!1sth!2sth!4v1611371852565!5m2!1sth!2sth"
                        width={200}
                        height={180}
                        frameBorder={0}
                        style={{ border: 0 }}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex={0}
                      />
                    </a>
                  </li>
                </ul>
              </Col>
            </nav>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
