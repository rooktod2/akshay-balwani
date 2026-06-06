import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi everyone! I’m <span className="purple">Akshay Balwani</span> from{" "}
            <span className="purple">Ahmedabad, India</span>.
          </p>

          <p>
            I’m currently in a career transition phase where I’m focused on
            building a stronger portfolio, improving my public work, networking
            with the right people, and exploring meaningful engineering
            opportunities.
          </p>

          <p>
            I’m not rushing the next step. My focus is to find work where I can
            contribute properly, keep learning, and build reliable products with
            real-world impact.
          </p>

          <p>
            Outside of coding, I enjoy things that keep me grounded and curious:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Dedicated Dog Walker 🐶
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Music 🎧
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "We have to be greater than what we suffer. My wish for you is to
            become hope. People need that."
          </p>
          <footer className="blockquote-footer"> Gwen Stacy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
