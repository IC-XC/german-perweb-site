import React, { useState } from "react";
import "../styles/pages.css";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    level: "Beginner",
    schedule: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="signup-success">
        <h2>Thank you for signing up!</h2>
        <p>We will contact you soon regarding your lessons.</p>
      </div>
    );
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up for German Lessons</h2>
      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
      <select name="level" value={formData.level} onChange={handleChange}>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <input type="text" name="schedule" placeholder="Preferred Schedule (e.g., Mon 17:00)" value={formData.schedule} onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
