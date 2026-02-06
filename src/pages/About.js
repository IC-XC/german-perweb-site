import React from "react";
import "../styles/pages.css";

function About() {
  return (
    <main>
      <section className="about-page">
        <h1>About the Teacher</h1>
        <p>
          Hello! I’m Per, your German language instructor. I have extensive experience teaching German to
          beginners and advanced students alike. My teaching philosophy focuses on interactive lessons,
          real-life practice, and gradual progress from basics to fluency.
        </p>

        <h2>Credentials & Experience</h2>
        <ul>
          <li>Certified German language teacher (XYZ Institute)</li>
          <li>5+ years of teaching experience</li>
          <li>Specialized in online and in-person lessons</li>
          <li>Customized lesson plans for every student</li>
        </ul>

        <h2>My Teaching Approach</h2>
        <p>
          Lessons are structured to gradually improve your reading, writing, listening, and speaking skills.
          Each course is designed to be interactive and engaging, with practical exercises and real-life
          scenarios.
        </p>
      </section>
    </main>
  );
}

export default About;
