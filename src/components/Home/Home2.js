import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/akshay_avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p>
              I'm a <b className="purple">Full Stack Software Engineer</b>{" "}
              focused on building reliable, production-ready web and mobile
              applications across backend, frontend, cloud infrastructure, and
              third-party integrations.
            </p>

            <br />

            <p>
              My experience includes building{" "}
              <b className="purple">Node.js APIs</b>, PostgreSQL-backed systems,
              React.js admin panels,
              <b className="purple"> React Native</b> mobile apps,
              <b className="purple"> AWS infrastructure</b>, CI/CD pipelines,
              authentication flows, payment integrations, notification systems,
              reporting dashboards, and production support for live products.
            </p>

            <br />

            <p>
              I work mainly with JavaScript, TypeScript, Node.js, Express.js,
              PostgreSQL, React.js, React Native, Next.js, AWS, GitLab CI/CD,
              PM2, REST APIs, and secure backend architecture.
            </p>

            <br />

            <p>
              I also use <b className="purple">AI-assisted development</b> as
              part of my engineering workflow for research, debugging,
              documentation and refactoring.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  maxWidth: "300px",
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
