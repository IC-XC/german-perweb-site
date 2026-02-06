function CourseCard({ title, description, duration, level, available }) {
  return (
    <div className={`card ${available ? "" : "unavailable"}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Level:</strong> {level}</p>
      {!available && <p className="not-available">Not available yet</p>}
    </div>
  );
}

export default CourseCard;
