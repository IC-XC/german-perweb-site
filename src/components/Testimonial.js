function Testimonial({ name, content }) {
  return (
    <div className="card">
      <p className="testimonial-content">{content}</p>
      <p className="testimonial-name">— {name}</p>
    </div>
  );
}

export default Testimonial;
