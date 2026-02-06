import React from "react";
import PricingCard from "../components/PricingCard";
import "../styles/pages.css";

const pricingPlans = [
  {
    id: 1,
    title: "Beginner",
    price: "$99",
    features: ["4 lessons per month", "Email support", "Access to resources"]
  },
  {
    id: 2,
    title: "Intermediate",
    price: "$149",
    features: ["8 lessons per month", "Priority email support", "Resources + exercises"]
  },
  {
    id: 3,
    title: "Advanced",
    price: "$199",
    features: ["12 lessons per month", "1-on-1 coaching", "Full resource library"]
  }
];

function Pricing() {
  return (
    <main className="pricing-page">
      <h1>Pricing Plans</h1>
      <p>Choose the plan that fits your learning style and goals.</p>

      <div className="cards-grid">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </main>
  );
}

export default Pricing;
