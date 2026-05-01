import { StrictMode, useMemo, useState, type CSSProperties } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Github, Mail, TerminalSquare } from "lucide-react";
import { professionalLinks, projects, type Project } from "./data/projects";
import "./styles.css";

function App() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? projects[0],
    [activeProjectId],
  );

  const themeStyle = {
    "--accent": activeProject.theme.accent,
    "--secondary": activeProject.theme.secondary,
    "--wash": activeProject.theme.wash,
  } as CSSProperties;

  return (
    <main className={`pattern-${activeProject.pattern}`} style={themeStyle}>
      <Backdrop />
      <section className="page-shell" aria-labelledby="site-title">
        <header className="masthead">
          <div>
            <p className="role">Software Engineer</p>
            <h1 id="site-title">Aaron</h1>
          </div>
        </header>

        <ProjectStage
          activeProject={activeProject}
          activeProjectId={activeProjectId}
          onSelectProject={setActiveProjectId}
        />

        <Contact />
      </section>
    </main>
  );
}

function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="scanline" />
    </div>
  );
}

type ProjectStageProps = {
  activeProject: Project;
  activeProjectId: string;
  onSelectProject: (projectId: string) => void;
};

function ProjectStage({
  activeProject,
  activeProjectId,
  onSelectProject,
}: ProjectStageProps) {
  return (
    <section className="project-stage" aria-label="GitHub projects">
      <div className="project-tiles" role="tablist" aria-label="Projects">
        {projects.map((project) => (
          <button
            className={project.id === activeProjectId ? "project-tile active" : "project-tile"}
            id={`${project.id}-tab`}
            key={project.id}
            onClick={() => onSelectProject(project.id)}
            role="tab"
            type="button"
            aria-selected={project.id === activeProjectId}
            aria-controls={`${project.id}-panel`}
          >
            <span className="active-marker" aria-hidden="true">
              &gt;
            </span>
            <span className="tile-name">{project.name}</span>
            <span className="tile-stack">{project.repo}</span>
            <span className="tile-meta">
              <span>{project.visibility}</span>
              <span>{project.stack[0]}</span>
              <span>{project.updated}</span>
            </span>
          </button>
        ))}
      </div>

      <article
        className="readme-panel"
        id={`${activeProject.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${activeProject.id}-tab`}
      >
        <div className="readme-top">
          <TerminalSquare size={18} aria-hidden="true" />
          <span>{activeProject.repo}</span>
        </div>

        <div className="readme-body">
          <h2>{activeProject.name}</h2>
          {activeProject.previewImage ? (
            <figure className="project-image">
              <img src={activeProject.previewImage.src} alt={activeProject.previewImage.alt} />
            </figure>
          ) : null}
          <ul>
            {activeProject.readmeSummary.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <div className="stack-list" aria-label={`${activeProject.name} tech stack`}>
            {activeProject.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="project-links">
            <a href={activeProject.repoUrl} target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            {activeProject.demoUrl ? (
              <a href={activeProject.demoUrl} target="_blank" rel="noreferrer">
                <ArrowUpRight size={18} aria-hidden="true" />
                {activeProject.demoLabel ?? "Live"}
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact-section" aria-labelledby="contact-title">
      <h2 id="contact-title">
        <Mail size={18} aria-hidden="true" />
        Contact
      </h2>
      <div className="contact-links">
        {professionalLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ))}
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
