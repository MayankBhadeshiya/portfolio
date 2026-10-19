import { profile } from "@/data/profile";
import PhoneStack from "@/components/PhoneStack";

export default function Home() {
  const { links } = profile;
  const contactLinks = [
    links.email && { label: links.email, href: `mailto:${links.email}` },
    links.linkedin && { label: "LinkedIn", href: links.linkedin },
    { label: "GitHub", href: links.github },
    links.resume && { label: "Résumé", href: links.resume },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="hero">
        <nav className="nav" aria-label="Main">
          <a className="nav-name" href="#">
            {profile.name}
          </a>
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#toolkit">Toolkit</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="hero-body">
          <div className="hero-copy">
            <h1 className="hero-name">
              <span>{profile.firstName}</span>
              <span>{profile.lastName}</span>
            </h1>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="btn btn-sun" href="#contact">Get in touch</a>
              <a className="btn btn-ghost" href={links.github} target="_blank" rel="noreferrer">
                View GitHub
              </a>
            </div>
          </div>
          <PhoneStack />
        </div>
      </header>

      <main id="main">
        <section className="section now" aria-labelledby="now-title">
          <h2 id="now-title">Right now</h2>
          <p className="now-text">{profile.now}</p>
        </section>

        <section id="work" className="section" aria-labelledby="work-title">
          <h2 id="work-title">Where I&apos;ve worked</h2>
          <ol className="timeline">
            {profile.experience.map((job) => (
              <li key={job.company}>
                <span className="timeline-period">{job.period}</span>
                <div>
                  <h3>{job.role}</h3>
                  <p className="timeline-company">{job.company}</p>
                  {job.summary && <p className="timeline-summary">{job.summary}</p>}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {profile.projects.length > 0 && (
          <section id="projects" className="section" aria-labelledby="projects-title">
            <h2 id="projects-title">Things I&apos;ve built</h2>
            <ul className="projects">
              {profile.projects.map((p) => (
                <li key={p.name} className="project">
                  <h3>
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noreferrer">{p.name}</a>
                    ) : (
                      p.name
                    )}
                  </h3>
                  <p>{p.description}</p>
                  <p className="project-stack">{p.stack.join(", ")}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section id="toolkit" className="section" aria-labelledby="toolkit-title">
          <h2 id="toolkit-title">What I work with</h2>
          <div className="toolkit">
            {profile.skills.map((group) => (
              <div key={group.name} className={`skill-group skill-${group.color}`}>
                <h3>{group.name}</h3>
                <ul>
                  {group.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section creds" aria-labelledby="creds-title">
          <h2 id="creds-title">Certified &amp; schooled</h2>
          <ul className="creds-list">
            {profile.certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
            <li>
              {profile.education.degree}, {profile.education.school}
            </li>
          </ul>
        </section>
      </main>

      <footer id="contact" className="contact">
        <h2 className="contact-title">Got an app to build? Let&apos;s talk.</h2>
        <ul className="contact-links">
          {contactLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} target={l.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="contact-foot">© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  );
}
