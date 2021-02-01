import React, { Component } from "react";
import "./style.scss";
import "../ranbow.scss";

import { withTranslation } from "react-i18next";
import i18next from "i18next";

class index extends React.Component {
  handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <div id="About">
          <div>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title />
            <link rel="stylesheet" href="style.css" />
            <div className="about-section">
              <div className="inner-container">
                <h1>{t("Aboutus.1")}</h1>
                <p className="text">{t("Aboutus.2")}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <hr class="rainbow"></hr> */}
      </div>
    );
  }
}
export default withTranslation()(index);
