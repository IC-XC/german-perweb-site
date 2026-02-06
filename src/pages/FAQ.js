import React, { useState } from "react";
import "../styles/pages.css";

const faqs = [
  { id: 1, question: "Do I need prior experience?", answer: "No, we cater to all levels from beginner to advanced." },
  { id: 2, question: "How often are lessons?", answer: "Lessons are flexible, you can choose weekly or monthly schedules." },
  { id: 3, question: "Can I switch levels?", answer: "Yes, you can upgrade or adjust your level anytime." }
];

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="faq-page">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq) => (
        <div key={faq.id} className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleFAQ(faq.id)}
          >
            {faq.question}
          </button>
          {openId === faq.id && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </main>
  );
}

export default FAQ;
