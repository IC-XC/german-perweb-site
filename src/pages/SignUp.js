import React, { useState } from "react";
import "../styles/pages.css";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    level: "Beginner",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", level: "Beginner" });
  };

  return (
    <main>
      {!submitted ? (
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up for German Lessons</h2>

          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="level">Level</label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <div className="signup-success">
          <h2>Thank you for signing up!</h2>
          <p>
            We will contact you soon at <strong>{formData.email}</strong>.
          </p>
          <button onClick={() => setSubmitted(false)}>Sign Up Another</button>
        </div>
      )}
    </main>
  );
}

export default SignUp;
