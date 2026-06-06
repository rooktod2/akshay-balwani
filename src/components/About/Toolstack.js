import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiGit,
  SiGitlab,
  SiGithub,
  SiGooglechrome,
  SiPostgresql,
} from "react-icons/si";

import vsCode from "../../Assets/TechIcons/vscode.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman fontSize={"24px"} />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGit fontSize={"24px"} />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab fontSize={"24px"} />
        <div className="tech-icons-text">GitLab</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub fontSize={"24px"} />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome fontSize={"24px"} />
        <div className="tech-icons-text">Chrome DevTools</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql fontSize={"24px"} />
        <div className="tech-icons-text">pgAdmin</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
