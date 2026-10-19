import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import PhoneStack from "@/components/PhoneStack";

export default function Home() {
  const { links } = profile;
  const contactLinks = [
    links.email && { label: links.email, href: `mailto:${links.email}` },
    links.linkedin && { label: strings.contact.linkedin, href: links.linkedin },
    { label: strings.contact.github, href: links.github },
    links.resume && { label: strings.contact.resume, href: links.resume },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      <a className="skip" href="#main">
        {strings.a11y.skipToContent}
      </a>

      <header className="hero">
        <nav className="nav" aria-label={strings.a11y.mainNav}>
          <a className="nav-name" href="#">
            {profile.name}
          </a>
          <ul>
            <li>
              <a href="#work">{strings.nav.work}</a>
            </li>
            <li>
              <a href="#toolkit">{strings.nav.toolkit}</a>
            </li>
            <li>
              <a href="#contact">{strings.nav.contact}</a>
            </li>
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
              <a className="btn btn-sun" href="#contact">
                {strings.hero.getInTouch}
              </a>
              <a className="btn btn-ghost" href={links.github} target="_blank" rel="noreferrer">
                {strings.hero.viewGithub}
              </a>
            </div>
          </div>
          <PhoneStack />
        </div>
      </header>

      <main id="main">
        <section className="section now" aria-labelledby="now-title">
          <h2 id="now-title">{strings.now.title}</h2>
          <p className="now-text">{profile.now}</p>
        </section>

        <section id="work" className="section" aria-labelledby="work-title">
          <h2 id="work-title">{strings.work.title}</h2>
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
            <h2 id="projects-title">{strings.projects.title}</h2>
            <ul className="projects">
              {profile.projects.map((p) => (
                <li key={p.name} className="project">
                  <h3>
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noreferrer">
                        {p.name}
                      </a>
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
          <h2 id="toolkit-title">{strings.toolkit.title}</h2>
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
          <h2 id="creds-title">{strings.creds.title}</h2>
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
        <h2 className="contact-title">{strings.contact.title}</h2>
        <ul className="contact-links">
          {contactLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="contact-foot">
          {strings.contact.copyright} {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}
