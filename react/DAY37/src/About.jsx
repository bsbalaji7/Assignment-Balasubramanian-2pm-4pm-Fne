import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-wrapper">

      {/* floating hearts */}
      <div className="hearts">
        <span>💔</span>
        <span>🖤</span>
        <span>💔</span>
        <span>🥀</span>
        <span>💔</span>
      </div>

      <div className="about-card">
        <h1>Broken, but Beautiful</h1>

        <p>
          Some stories don’t end with “happily ever after”.
          <br />
          Some end with silence… and growth.
        </p>

        <p>
          I learned that love can heal,
          <br />
          but it can also teach you how strong you are alone.
        </p>

        <blockquote>
          "We were a chapter… not the whole book."
        </blockquote>

        <button className="heal-btn">
          Start Healing ✨
        </button>
      </div>
    </div>
  );
}

export default About;
