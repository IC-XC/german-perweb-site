import React from "react";
import Testimonial from "../components/Testimonial";
import testimonials from "../data/testimonials";
import "../styles/pages.css";

function Testimonials() {
  return (
    <main className="testimonials-page">
      <h1>What Our Students Say</h1>

      <div className="cards-grid">
        {testimonials.map((t) => (
          <Testimonial
            key={t.id}
            name={t.name}
            content={t.content}
          />
        ))}
      </div>
    </main>
  );
}

export default Testimonials;
