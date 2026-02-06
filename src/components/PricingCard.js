function PricingCard({ title, price, features }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{price}</p>
      <ul>
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
    </div>
  );
}

export default PricingCard;
