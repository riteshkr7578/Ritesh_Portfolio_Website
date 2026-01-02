import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import PYCHARM from "../../Assets/TechIcons/pycharm.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Window Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={PYCHARM} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">PyCharm</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
