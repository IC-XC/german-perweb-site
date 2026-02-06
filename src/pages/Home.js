import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import lessons from "../data/lessons";
import "../styles/pages.css";

function Home() {
  // Neem de eerste 4 lessen als preview
  const previewLessons = lessons.slice(0, 4);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <h1>Learn German with Per</h1>
        <p>Interactive lessons for beginners to advanced students. Start speaking German today!</p>
        <Link to="/signup" className="cta-button primary">
          Sign Up Now
        </Link>
      </section>

      {/* Mini Courses Preview */}
      <section className="courses-preview">
        <h2>Sample Lessons</h2>
        <div className="cards-grid">
          {previewLessons.map((lesson) => (
            <CourseCard
              key={lesson.id}
              title={lesson.title}
              description={lesson.description}
              duration={lesson.duration}
              level={lesson.level}
              available={lesson.available}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
