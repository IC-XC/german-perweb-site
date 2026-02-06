import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import lessons from "../data/lessons";
import "../styles/pages.css";

function Courses() {
  const [filter, setFilter] = useState("All");

  const filteredLessons =
    filter === "All"
      ? lessons
      : lessons.filter((lesson) => lesson.level === filter);

  return (
    <main className="courses-page">
      <h1>All Courses & Lessons</h1>
      <p>Choose your level to see relevant lessons.</p>

      {/* Level Filter */}
      <div className="filter-buttons">
        {["All", "Beginner", "Intermediate", "Advanced"].map((lvl) => (
          <button
            key={lvl}
            onClick={() => setFilter(lvl)}
            className={filter === lvl ? "active" : ""}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="cards-grid">
        {filteredLessons.map((lesson) => (
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
    </main>
  );
}

export default Courses;
