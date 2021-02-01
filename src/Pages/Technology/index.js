import React, { Component } from "react";
import "./style.scss";
import "../ranbow.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import i18next from "i18next";

class index extends Component {
  handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <div id="Technology" className="backgroud ">
          <div className="technic-text">
            <h1>{t("Technology.1")}</h1>
            <p>
              {t("Technology.2")}
              <br />
              {t("Technology.3")}
            </p>
          </div>

          <div className="box1">
            <Container>
              <Row>
                <Col md={6} lg={4}>
                  <div className="flip">
                    <div
                      className="front"
                      style={{
                        backgroundImage: "url(Picture/Technology/VR.jpg)",
                      }}
                    >
                      <h2 className="text-shadow">Virtual reality</h2>
                    </div>
                    <div className="back">
                      <h2>Virtual reality หรือ VR</h2>
                      <p>
                        เป็นการจำลองสภาพแวดล้อมจริงเข้าไปให้เสมือนจริง
                        โดยผ่านการรับรู้จากการมองเห็น เสียง สัมผัส
                        แม้กระทั้งกลิ่น
                        โดยจะตัดขาดเราออกจากสภาพแวดล้อมปัจจุบันเพื่อเข้าไปสู่ภาพที่จำลองขึ้นมาตัวอย่างเช่น
                        การจำลองสถานที่ Google Street View ,
                        การแข่งขันบังคับเครื่องบิน Drone Racing เป็นต้น
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4}>
                  <div className="flip">
                    <div
                      className="front"
                      style={{
                        backgroundImage: "url(Picture/Technology/AR1.jpg)",
                      }}
                    >
                      <h2 className="text-shadow">Augmented reality</h2>
                    </div>
                    <div className="back">
                      <h2>Augmented reality หรือ AR</h2>
                      <p>
                        คือ
                        การนำเทคโนโลยีมาผสานระหว่างโลกแห่งความเป็นจริงและความเสมือนจริงเข้าด้วยกัน
                        ด้วยการใช้ระบบซอฟต์แวร์และอุปกรณ์เชื่อมต่อต่างๆ เช่น
                        เว็บแคมคอมพิวเตอร์หรืออุปกรณ์อื่นที่เกี่ยวข้อง
                        โดยวัตถุเสมือนที่ว่านั้น อาจจะเป็น ภาพ วีดิโอ เสียง
                        ข้อมูลต่างๆที่ประมวลผลมาจากคอมพิวเตอร์ มือถือ
                        หรืออุปกรณ์สวมใส่
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4}>
                  <div className="flip">
                    <div
                      className="front"
                      style={{
                        backgroundImage:
                          "url(Picture/Technology/projector.jpg)",
                      }}
                    >
                      <h2 className="text-shadow">
                        Projection technology solutions
                      </h2>
                    </div>
                    <div className="back">
                      <h2>Projector360</h2>
                      <p>
                        อุปกรณ์ฉายภาพที่ใช้ในการนำเสนอข้อมูลต่างๆ
                        ที่รองรับสัญญาณภาพจากคอมพิวเตอร์, เครื่องเล่นวีซีดี,
                        เครื่องเล่นดีวีดี และเครื่องกำเนิดภาพอื่นๆ
                      </p>
                    </div>
                  </div>
                </Col>
                {/* vertical */}
                <Col md={6} lg={4}>
                  <div className="flip flip-vertical">
                    <div
                      className="front"
                      style={{
                        backgroundImage:
                          "url(Picture/Technology/Composition.jpg)",
                      }}
                    >
                      <h2 className="text-shadow">Composition</h2>
                    </div>
                    <div className="back">
                      <h2>Composition have sounds , light, colour</h2>
                      <p>
                        ในการจัดห้องหรืองาน
                        จำเป็นต้องมีจุดเด่นมีความดึงดูดภายในงาน เพื่อให้มีอรรถรส
                        ในกรเข้าชมทำให้มีความน่าสนใจดึงดูดในความอยากรู้
                        อยากเห็นมากขึ้น ด้วยการตกแต่งที่สวยงาม
                        และวิธีในการเลือกใช้ ไฟ แสง สีเสียง ให้เข้ากับงานต่างๆ
                        นั้นเอง
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4}>
                  <div className="flip flip-vertical">
                    <div
                      className="front"
                      style={{
                        backgroundImage: "url(Picture/Technology/Hologram.jpg)",
                      }}
                    >
                      <h2 className="text-shadow">Hologram</h2>
                    </div>
                    <div className="back">
                      <h2> เทคโนโลยี โฮโลแกรม ( Hologram )</h2>
                      <p>
                        Hologram คือ ภาพที่ถูกสร้างขึ้นมาให้ดูมิติ มีความชัด
                        ความลึก มีความนูน หลุดออกมาจากกรอบเสมือนของจริง
                        โดยใช้แสง 3 มิติ
                        ที่ลอยตัวรอบด้านมันเสมือนกับว่าวัตถุที่เราเห็นนั้นมันสามารถที่จะจับต้องได้
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4}>
                  <div className="flip flip-vertical">
                    <div
                      className="front"
                      style={{
                        backgroundImage:
                          "url(Picture/Technology/modelmapping.jpg)",
                      }}
                    >
                      <h2 className="text-shadow">Projection Mapping </h2>
                    </div>
                    <div className="back">
                      <h2>เทคโนโลยี 3D Mapping หรือ Projection Mapping </h2>
                      <p>
                        เป็นเทคโนโลยีการฉายภาพวัตถุอาจจะสองมิติหรือสามมิติลงบนพื้นผิวใดพื้นผิวหนึ่ง
                        ตลอดช่วงระยะที่มีการเก็บข้อมูลเชิงพื้นที่ (Spatial
                        Mapping)
                        โดยใช้การจำลองสภาพแวดล้อมจริงเข้าไปให้เสมือนจริง
                        (Virtual Reality)
                        โดยทำให้จับภาพพื้นที่ของจริงได้ทุกซอกทุกมุม ทั้งนี้
                        ในต่างประเทศ มีสตาร์ทอัพรับทำ 3D Mapping ตามที่ต่าง ๆ
                        แล้ว เช่น Fantastmo, Matterport, Deepmap, Velodyne Lidar
                        และ Netradyne
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/* <div className="More" >
            <Link to="/More">
            {t("More.1")}
            </Link>
          </div> */}
        </div>

        <hr class="rainbow"></hr>
      </div>
    );
  }
}
export default withTranslation()(index);
