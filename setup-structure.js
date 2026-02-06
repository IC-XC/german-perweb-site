const fs = require("fs");
const { execSync } = require("child_process");

// Helper functions
const createFile = (path, content = "") => {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, content);
  }
};

const createDir = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
};

// 1️⃣ Maak de mappen
["src/components", "src/pages", "src/data", "src/styles"].forEach(createDir);

// 2️⃣ Maak componenten
createFile(
  "src/components/Header.js",
  `import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <h1>German Lessons</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/faq">FAQ</Link>
      </nav>
    </header>
  );
}

export default Header;
`
);

createFile(
  "src/components/Footer.js",
  `import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} german.perweb.site</p>
    </footer>
  );
}

export default Footer;
`
);

createFile(
  "src/components/CourseCard.js",
  `function CourseCard({ title, description, duration, level }) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Level:</strong> {level}</p>
    </div>
  );
}

export default CourseCard;
`
);

createFile(
  "src/components/Testimonial.js",
  `function Testimonial({ name, text }) {
  return (
    <div className="testimonial">
      <p>"{text}"</p>
      <strong>- {name}</strong>
    </div>
  );
}

export default Testimonial;
`
);

createFile(
  "src/components/SignupForm.js",
  `function SignupForm() {
  return (
    <form className="signup-form">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <select>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
`
);

// 3️⃣ Maak pages
const pageTemplate = (name) =>
  `function ${name}() {
  return (
    <section>
      <h2>${name}</h2>
      <p>Content for ${name} page.</p>
    </section>
  );
}

export default ${name};
`;

["Home", "About", "Courses", "Pricing", "SignUp", "FAQ"].forEach((page) => {
  createFile(`src/pages/${page}.js`, pageTemplate(page));
});

// 4️⃣ Maak data files
createFile(
  "src/data/lessons.js",
  `const lessons = [
  { id: 1, title: "Basic German A1", description: "Alphabet, pronunciation, basics", duration: "60 min", level: "Beginner" },
];
export default lessons;
`
);

createFile(
  "src/data/pricing.js",
  `const pricing = [
  { id: 1, name: "Beginner Package", lessons: 10, price: "€250" },
];
export default pricing;
`
);

createFile(
  "src/data/testimonials.js",
  `const testimonials = [
  { id: 1, name: "Anna", text: "Great lessons, very clear explanations!" },
];
export default testimonials;
`
);

// 5️⃣ Maak CSS files
createFile(
  "src/styles/header.css",
  `.header { padding: 1rem; background: #222; color: white; }
.header a { color: white; margin-right: 1rem; text-decoration: none; }
`
);

createFile(
  "src/styles/footer.css",
  `.footer { padding: 1rem; text-align: center; background: #f2f2f2; }
`
);

createFile(
  "src/styles/pages.css",
  `section { padding: 2rem; }
`
);

// 6️⃣ Installeer react-router-dom automatisch
console.log("📦 Installing react-router-dom...");
try {
  execSync("npm install react-router-dom", { stdio: "inherit" });
  console.log("✅ react-router-dom installed!");
} catch (err) {
  console.log("❌ Failed to install react-router-dom. Run manually: npm install react-router-dom");
}

console.log("🎉 Projectstructuur + boilerplate compleet!");
