import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNextdotjs,
  SiExpress,
  SiJsonwebtokens,
  SiAmazonrds,
  SiAmazons3,
  SiAmazonapigateway,
  SiNginx,
  SiOpenai,
} from "react-icons/si";
import { FaServer, FaShieldAlt, FaCreditCard, FaBell } from "react-icons/fa";
import { MdApi, MdOutlineLink } from "react-icons/md";
import { AiOutlineCloudServer } from "react-icons/ai";

import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="TypeScript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiExpress fontSize={"24px"} />
        <div className="tech-icons-text">Express.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="PostgreSQL" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React.js" />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React Native" />
        <div className="tech-icons-text">React Native</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="Redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind CSS" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <MdApi fontSize={"26px"} />
        <div className="tech-icons-text">REST APIs</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJsonwebtokens fontSize={"24px"} />
        <div className="tech-icons-text">JWT Auth</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineLink fontSize={"26px"} />
        <div className="tech-icons-text">OAuth2</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineCloudServer fontSize={"27px"} />
        <div className="tech-icons-text">EC2</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonrds fontSize={"26px"} />
        <div className="tech-icons-text">RDS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 fontSize={"26px"} />
        <div className="tech-icons-text">S3</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaServer fontSize={"24px"} />
        <div className="tech-icons-text">ALB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">AWS WAF</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="GitLab CI/CD" />
        <div className="tech-icons-text">GitLab CI/CD</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaServer fontSize={"24px"} />
        <div className="tech-icons-text">PM2</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNginx fontSize={"24px"} />
        <div className="tech-icons-text">Nginx</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="Firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaBell fontSize={"24px"} />
        <div className="tech-icons-text">Push Notifications</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineLink fontSize={"26px"} />
        <div className="tech-icons-text">Deep Linking</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaCreditCard fontSize={"24px"} />
        <div className="tech-icons-text">Payment Integrations</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonapigateway fontSize={"25px"} />
        <div className="tech-icons-text">Third-party APIs</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai fontSize={"24px"} />
        <div className="tech-icons-text">AI-assisted Development</div>
      </Col>
    </Row>
  );
}

export default Techstack;
