import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Software Engineer",
          "Node.js & PostgreSQL Backend Developer",
          "React / React Native Developer",
          "AI-Augmented Product Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
