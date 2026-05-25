import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Cpu,
  Download,
  ImagePlus,
  ServerCog,
} from "lucide-react";
import "./styles.css";

const skills = [
  "Python",
  "C",
  "C++",
  "JavaScript",
  "SQL",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Data preprocessing",
  "Predictive modeling",
];

const projects = [
  {
    title: "SwiftCache",
    label: "In-Memory Key-Value Engine",
    stack: "Systems / Low Latency / Storage",
    href: "https://github.com/ajaydevgit/Swiftcache",
    description:
      "Designed and developed a custom in-memory key-value database engine for ultra-fast data storage and low-latency retrieval.",
  },
  {
    title: "Budget Management Application",
    label: "Full-Stack Finance App",
    stack: "React.js / Data Management / Responsive UI",
    href: "https://ajaydevgit.github.io/budget-app/",
    description:
      "Built a full-stack React.js application for expense tracking and financial data management with a clean, responsive interface.",
  },
  {
    title: "Library Management System",
    label: "Database-Driven Web Application",
    stack: "DBMS / Node.js / Express / SQL",
    href: "https://dbms-ne4r.onrender.com/",
    description:
      "Designed and developed a database-driven library management system to handle book catalogs, member registrations, and circulation workflows.",
  },
];

const experience = [
  {
    role: "Machine Learning Intern",
    org: "Corizo",
    time: "Feb - Mar 2025",
    detail:
      "Completed practical training covering data preprocessing, model training, and applied AI/ML workflows.",
  },
  {
    role: "AI/ML Learner",
    org: "IBM Q2D Student Resource Platform",
    time: "Ongoing",
    detail:
      "Pursuing industry-oriented AI and Machine Learning training through structured practical modules.",
  },
  {
    role: "Campus Lead",
    org: "muLearn",
    time: "Ongoing",
    detail:
      "Leading technical workshops, student engagement activities, and peer-to-peer learning initiatives.",
  },
];

const certifications = [
  "ML Internship - Corizo",
  "Web Dev Internship - Corizo",
  "AI & ML - IBM Q2D",
  "NASA Space Apps Challenge",
  "Campus Leadership - muLearn",
];

const gameObstacleNames = [
  "React",
  "WebKit",
  "APIs",
  "Models",
  "Node",
  "MongoDB",
  "Bugs",
  "Latency",
  "Data",
  "Deploy",
];

function App() {
  useScrollReveal();

  return (
    <main className="min-h-screen overflow-hidden bg-[#13070b] text-[#f4eadf]">
      <CustomCursor />
      <div className="fixed inset-0 -z-10 bg-grid" />
      <div className="fixed inset-0 -z-10 bg-radial" />
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <RocketGame />
      <Experience />
      <Contact />
    </main>
  );
}

function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot || window.matchMedia("(pointer: coarse)").matches) return undefined;

    const move = (event) => {
      const { clientX, clientY } = event;
      cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      dot.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };

    const hover = (event) => {
      const isInteractive = event.target.closest("a, button, [data-cursor='active']");
      cursor.classList.toggle("cursor-active", Boolean(isInteractive));
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", hover);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", hover);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-[#f4eadf]/10 bg-[#13070b]/82 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-mono text-sm font-semibold uppercase tracking-[0.24em] text-[#f4eadf]">
          AJAYDEV A
        </a>
        <div className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f4eadf]/52 md:flex">
          <a className="transition hover:text-[#f4eadf]" href="#projects">Projects</a>
          <a className="transition hover:text-[#f4eadf]" href="#skills">Skills</a>
          <a className="transition hover:text-[#f4eadf]" href="#play">Play</a>
          <a className="transition hover:text-[#f4eadf]" href="#experience">Experience</a>
          <a className="transition hover:text-[#f4eadf]" href="#contact">Contact</a>
        </div>
        <a
          href="mailto:thedevsheets@gmail.com"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f4eadf]/15 bg-[#f4eadf]/5 text-[#f4eadf]/80 transition hover:border-[#f1b07a]/60 hover:text-[#f1b07a]"
          aria-label="Email Ajaydev"
        >
          <Mail size={17} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <section id="top" className="relative flex min-h-screen items-center px-4 pt-24 sm:px-6 lg:px-8">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div data-reveal className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f1b07a]/20 bg-[#f1b07a]/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#f1b07a]">
            <Cpu size={14} />
            AI / ML | Full-Stack Development | Software
          </div>

          <h1 data-reveal className="poster-title font-display text-[clamp(5rem,15vw,15rem)] font-black uppercase leading-[0.72] tracking-normal text-[#f4eadf]">
            Ajay
            <span className="block">Dev</span>
          </h1>

          <p data-reveal className="mt-8 max-w-2xl text-lg leading-8 text-[#f4eadf]/72 sm:text-xl">
            Building intelligent, scalable, and data-driven systems across AI/ML,
            full-stack development, and modern software engineering.
          </p>

          <div data-reveal className="mt-9 flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects">
              View Projects
              <ArrowUpRight size={17} />
            </a>
            <a className="btn-secondary" href="https://github.com/ajaydevgit" target="_blank" rel="noreferrer">
              GitHub
              <Github size={17} />
            </a>
            <a className="btn-secondary" href="https://linkedin.com/in/buildwithajay" target="_blank" rel="noreferrer">
              LinkedIn
              <Linkedin size={17} />
            </a>
            <a className="btn-secondary" href="/Resume.pdf" download="Resume.pdf">
              Resume
              <Download size={17} />
            </a>
          </div>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-[460px] lg:mt-16">
          <div className="photo-frame">
            <div className="photo-scanline" />
            {hasPhoto ? (
              <img
                className="profile-photo"
                src="/ajay.png"
                alt="Ajaydev A"
                onError={() => setHasPhoto(false)}
              />
            ) : (
              <div className="photo-placeholder">
                <ImagePlus size={46} />
                <span>Add ajay.png</span>
              </div>
            )}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <Metric label="Track" value="AI/ML" />
            <Metric label="Track" value="Full-Stack" />
            <Metric label="Track" value="Software Engineering" />
          </div>
        </div>
      </div>
    </section>
  );
}

function RocketGame() {
  const gameRef = useRef(null);
  const [rocketY, setRocketY] = useState(50);
  const [bullets, setBullets] = useState([]);
  const [obstacles, setObstacles] = useState(() => createObstacles());
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const isGameOver = lives <= 0;

  useEffect(() => {
    let frame;
    let last = performance.now();

    const tick = (now) => {
      const delta = Math.min((now - last) / 16.67, 2);
      last = now;

      if (!isGameOver) {
        setBullets((current) =>
          current
            .map((bullet) => ({ ...bullet, x: bullet.x + 2.5 * delta }))
            .filter((bullet) => bullet.x < 108),
        );

        setObstacles((current) =>
          current.map((obstacle) => {
          const nextX = obstacle.x - 0.38 * delta;
            if (nextX >= -14) {
              return { ...obstacle, x: nextX };
            }

            setLives((currentLives) => Math.max(0, currentLives - 1));
            return recycleObstacle(obstacle, 108 + Math.random() * 18);
          }),
        );
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isGameOver]);

  useEffect(() => {
    if (isGameOver) return;

    setObstacles((currentObstacles) => {
      let hits = 0;
      const nextObstacles = currentObstacles.map((obstacle) => {
        const isHit = bullets.some(
          (bullet) =>
            Math.abs(bullet.x - obstacle.x) < 5 &&
            Math.abs(bullet.y - obstacle.y) < 10,
        );
        if (!isHit) return obstacle;
        hits += 1;
        return recycleObstacle(obstacle, 104 + Math.random() * 16);
      });

      if (hits > 0) {
        setScore((current) => current + hits);
        setBullets((current) => current.slice(hits));
      }

      return nextObstacles;
    });
  }, [bullets, isGameOver]);

  const moveRocket = (event) => {
    const bounds = gameRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const nextY = ((event.clientY - bounds.top) / bounds.height) * 100;
    setRocketY(Math.max(14, Math.min(86, nextY)));
  };

  const fire = () => {
    if (isGameOver) {
      resetGame();
      return;
    }

    setBullets((current) => [
      ...current.slice(-5),
      { id: crypto.randomUUID(), x: 16, y: rocketY },
    ]);
  };

  const resetGame = () => {
    setScore(0);
    setLives(3);
    setBullets([]);
    setObstacles(createObstacles());
  };

  return (
    <section id="play" className="section">
      <SectionIntro
        eyebrow="Interactive Lab"
        title="Fire through the stack."
        text="Move inside the panel and click to fire. It is a small playable idea: learning the tools, breaking through blockers, and building forward."
      />

      <div
        ref={gameRef}
        data-cursor="active"
        data-reveal
        className="rocket-game mt-10"
        onPointerMove={moveRocket}
        onClick={fire}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === " " || event.key === "Enter") fire();
        }}
      >
        <div className="game-hud">
          <span>Score {score}</span>
          <span>Lives {"♥".repeat(lives)}{"♡".repeat(3 - lives)}</span>
          <span>{isGameOver ? "Click / tap to restart" : "Click / tap to fire"}</span>
        </div>

        <div className="rocket" style={{ top: `${rocketY}%` }}>
          <span>▲</span>
        </div>

        {bullets.map((bullet) => (
          <span
            className="laser"
            key={bullet.id}
            style={{ left: `${bullet.x}%`, top: `${bullet.y}%` }}
          />
        ))}

        {obstacles.map((obstacle) => (
          <span
            className="tech-obstacle"
            key={obstacle.id}
            style={{ left: `${obstacle.x}%`, top: `${obstacle.y}%` }}
          >
            {obstacle.label}
          </span>
        ))}

        <div className="game-finish">
          <p>{isGameOver ? "That's why I am here." : score >= 7 ? "Still building forward." : "AI/ML. Full-Stack. Software Engineering."}</p>
        </div>
      </div>
    </section>
  );
}

function createObstacles() {
  return gameObstacleNames.slice(0, 7).map((label, index) => ({
    id: `${label}-${index}`,
    label,
    x: 74 + index * 13,
    y: 18 + ((index * 17) % 64),
  }));
}

function recycleObstacle(obstacle, x) {
  const label = gameObstacleNames[Math.floor(Math.random() * gameObstacleNames.length)];
  return {
    ...obstacle,
    label,
    x,
    y: 16 + Math.random() * 68,
  };
}

function Metric({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#f4eadf]/10 pb-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#f4eadf]/42">{label}</span>
      <span className="text-right font-display text-lg font-bold text-[#f4eadf]">{value}</span>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionIntro
        eyebrow="Selected Projects"
        title="Practical builds with intelligence underneath."
        text="A focused set of AI, systems, and full-stack work. The layout keeps attention on what was built, why it matters, and the technical direction behind it."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article className="project-card" data-reveal style={{ "--reveal-delay": `${index * 90}ms` }} key={project.title}>
            <p className="font-mono text-xs text-[#f1b07a]">0{index + 1}</p>
            <h3 className="mt-5 font-display text-4xl font-black uppercase leading-none text-[#f4eadf]">
              {project.title}
            </h3>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f4eadf]/42">
              {project.label}
            </p>
            <p className="mt-6 text-sm leading-7 text-[#f4eadf]/70">{project.description}</p>
            <p className="mt-8 inline-flex rounded-full border border-[#f4eadf]/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#f4eadf]/55">
              {project.stack}
            </p>
            {project.href && (
              <a
                className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#f1b07a] transition hover:text-[#f4eadf]"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                Open Project
                <ArrowUpRight size={15} />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <SectionIntro
            eyebrow="Technical Stack"
            title="Tools for models, APIs, and products."
            text="Core programming, machine learning workflows, and full-stack development."
          />
        </div>
        <div className="flex flex-wrap content-start gap-3">
          {skills.map((skill, index) => (
            <span className="skill-chip" data-reveal style={{ "--reveal-delay": `${index * 28}ms` }} key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionIntro
        eyebrow="Experience & Certifications"
        title="Learning by building, leading, and shipping."
        text="Internships, training programs, and campus leadership connected to AI, web development, and technical communities."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" data-reveal style={{ "--reveal-delay": `${index * 110}ms` }} key={`${item.role}-${item.org}`}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#f1b07a]">{item.time}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-[#f4eadf]">{item.role}</h3>
              <p className="text-sm font-semibold text-[#f4eadf]/52">{item.org}</p>
              <p className="mt-4 text-sm leading-7 text-[#f4eadf]/70">{item.detail}</p>
            </article>
          ))}
        </div>

        <div data-reveal className="rounded-[1.6rem] border border-[#f4eadf]/10 bg-[#f4eadf]/[0.035] p-6">
          <div className="mb-6 flex items-center gap-3">
            <ServerCog className="text-[#f1b07a]" />
            <h3 className="font-display text-2xl font-bold text-[#f4eadf]">Certifications</h3>
          </div>
          <div className="space-y-3">
            {certifications.map((item) => (
              <p className="rounded-2xl border border-[#f4eadf]/10 bg-black/20 px-4 py-3 text-sm text-[#f4eadf]/70" key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section pb-20">
      <div data-reveal className="rounded-[2rem] border border-[#f1b07a]/20 bg-[#f1b07a]/[0.035] p-6 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#f1b07a]">Contact</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.85] text-[#f4eadf]">
            Build the next intelligent system.
          </h2>
          <div className="space-y-3">
            <a className="btn-primary mb-4 w-full justify-center" href="/Resume.pdf" download="Resume.pdf">
              Download Resume
              <Download size={17} />
            </a>
            <ContactLink href="mailto:thedevsheets@gmail.com" icon={<Mail size={18} />} text="thedevsheets@gmail.com" />
            <ContactLink href="tel:9895344059" icon={<Phone size={18} />} text="9895344059" />
            <ContactLink href="https://linkedin.com/in/buildwithajay" icon={<Linkedin size={18} />} text="linkedin.com/in/buildwithajay" />
            <ContactLink href="https://github.com/ajaydevgit" icon={<Github size={18} />} text="github.com/ajaydevgit" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, icon, text }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-center gap-3 rounded-2xl border border-[#f4eadf]/10 bg-black/20 px-4 py-3 text-sm text-[#f4eadf]/70 transition hover:border-[#f1b07a]/40 hover:text-[#f4eadf]"
    >
      <span className="text-[#f1b07a]">{icon}</span>
      <span className="min-w-0 break-words">{text}</span>
    </a>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div data-reveal>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#f1b07a]">{eyebrow}</p>
      <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,6vw,6rem)] font-black uppercase leading-[0.9] text-[#f4eadf]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-[#f4eadf]/58">{text}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
