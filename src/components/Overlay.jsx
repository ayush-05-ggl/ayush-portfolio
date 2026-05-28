import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const Overlay = React.forwardRef(function Overlay(
  { projects, selectedProject, onCloseProject, onSelectProject, onNav, quality, onToggleQuality, section },
  ref
) {
  return (
    <div className="overlay" ref={ref}>
      <header className="nav">
  <div className="logo">Ayush // Spacefolio</div>

  <div className="navRight">
    <div className="sectionPill">
      {section?.toUpperCase()}
    </div>

    <button className="qualityBtn" onClick={onToggleQuality}>
      {quality === "high" ? "High" : "Low"} Graphics
    </button>

    <div className="links">
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          onNav?.("about");
        }}
      >
        About
      </a>

      <a
        href="#projects"
        onClick={(e) => {
          e.preventDefault();
          onNav?.("projects");
        }}
      >
        Projects
      </a>

      <a
        href="#contact"
        className="cta"
        onClick={(e) => {
          e.preventDefault();
          onNav?.("contact");
        }}
      >
        Contact
      </a>
    </div>
  </div>
</header>


      <main className="content">
        <section className="hero" id="top">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Building software that feels <span className="glow">out of this world</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Full-stack engineer (React, Node, AWS) + 3D experiences (Three.js).
          </motion.p>

          <div className="heroBtns">
            <a className="btn primary" href="#projects">Explore Projects</a>
            <a className="btn" href="#contact">Let’s Talk</a>
          </div>
        </section>

        <section id="about" className="panel">
                <h2>About</h2>

                <p className="aboutLead">
                    I’m Ayush Gehlot — a Software Development-focused MS CS student at Pace University (May 2026),
                    building end-to-end products that combine clean UI, solid backend engineering, and systems thinking.
                </p>

                <div className="aboutGrid">
                    <div className="aboutCard">
                    <h3>What I’m best at</h3>
                    <ul className="aboutList">
                        <li><span className="dot2" /> Full-stack engineering: React + Node/Express + PostgreSQL/MongoDB</li>
                        <li><span className="dot2" /> Product-grade UI: touch-first layouts, component design, performance tuning</li>
                        <li><span className="dot2" /> Systems + integration: sensors/I2C + control logic + dashboards (Raspberry Pi)</li>
                    </ul>
                    </div>

                    <div className="aboutCard">
                    <h3>Recent work</h3>
                    <ul className="aboutList">
                        <li><span className="dot2" /> NYSCF: smart incubator / Tri-Gas controller (O₂/CO₂/N₂) + React touchscreen UI</li>
                        <li><span className="dot2" /> Smart City Dashboard ELL: React UI + MongoDB Atlas analytics & visualizations</li>
                        <li><span className="dot2" /> CaterPal hackathon: 1st place — AI restaurant chatbot (Flask + MongoDB + OpenAI)</li>
                    </ul>
                    </div>

                    <div className="aboutCard aboutFull">
                    <h3>Tech stack</h3>
                    <div className="pillRow">
                        <span className="pill">React</span>
                        <span className="pill">Three.js</span>
                        <span className="pill">Node.js</span>
                        <span className="pill">Express</span>
                        <span className="pill">PostgreSQL</span>
                        <span className="pill">MongoDB Atlas</span>
                        <span className="pill">AWS</span>
                        <span className="pill">Python</span>
                        <span className="pill">Flask</span>
                        <span className="pill">C / C++</span>
                        <span className="pill">Raspberry Pi</span>
                        <span className="pill">REST APIs</span>
                    </div>
                    <div className="aboutCard">
                      <h3>Engineering foundations</h3>
                      <ul className="aboutList">
                        <li><span className="dot2" /> Data Structures & Algorithms (complexity analysis, trees, graphs)</li>
                        <li><span className="dot2" /> Database Management Systems (SQL, indexing, normalization)</li>
                        <li><span className="dot2" /> Internet Computing & RESTful API design</li>
                        <li><span className="dot2" /> Mobile Application & Web Content Development</li>
                        <li><span className="dot2" /> Computational Statistics & data analysis concepts</li>
                        <li><span className="dot2" /> Cloud Computing fundamentals (AWS, deployment workflows)</li>
                      </ul>
                    </div>
                    <div className="aboutCard">
                      <h3>Quality, process & analytics</h3>
                      <ul className="aboutList">
                        <li><span className="dot2" /> Software Testing principles (manual + automated testing)</li>
                        <li><span className="dot2" /> Agile & Scrum methodology, sprint planning, and ceremonies</li>
                        <li><span className="dot2" /> Test management & tracking using Jira and QTest</li>
                        <li><span className="dot2" /> Data visualization & reporting using Tableau</li>
                        <li><span className="dot2" /> Exposure to business & accounting platforms (Xero)</li>
                      </ul>
                    </div>
                    <p className="aboutNote">
                      I value writing software that is not only functional, but testable, maintainable,
                      and aligned with real-world development workflows.
                    </p>
                    </div>
                </div>
                </section>
            <section id="experience" className="panel">
                  <h2>Professional Experience</h2>

                  <div className="expGrid">

                    <div className="expCard">
                      <div className="expTop">
                        <div>
                          <div className="expRole">Software Engineer</div>
                          <div className="expCompany">The New York Stem Cell Foundation</div>
                        </div>

                        <div className="expDate">2025</div>
                      </div>

                      <div className="expBody">
                        Worked with the R&D team to prototype a smart incubator system for preserving
                        human cells under controlled environmental conditions.
                      </div>

                      <ul className="expList">
                        <li>Developed PID-based gas regulation system for O₂, CO₂, N₂, and pressure control</li>
                        <li>Built React touchscreen GUI on Raspberry Pi for monitoring & configuration</li>
                        <li>Integrated embedded control logic with real-time environmental workflows</li>
                      </ul>
                    </div>

                    <div className="expCard">
                      <div className="expTop">
                        <div>
                          <div className="expRole">Full Stack Developer Intern</div>
                          <div className="expCompany">Dream Team Technologies</div>
                        </div>

                        <div className="expDate">2022 — 2023</div>
                      </div>

                      <div className="expBody">
                        Collaborated with developers and designers to build a university management platform.
                      </div>

                      <ul className="expList">
                        <li>Developed responsive interfaces using React, Angular & Vue.js</li>
                        <li>Implemented OAuth authentication and secure payment handling</li>
                        <li>Automated testing using Selenium + PyTest reducing manual QA effort by 75%</li>
                      </ul>
                    </div>

                    <div className="expCard">
                      <div className="expTop">
                        <div>
                          <div className="expRole">Hardware Engineering Intern</div>
                          <div className="expCompany">Defense Research & Development Organization (DRDO)</div>
                        </div>

                        <div className="expDate">2021 — 2022</div>
                      </div>

                      <div className="expBody">
                        Validated VHDL-designed circuits and simulation workflows for digital hardware systems.
                      </div>

                      <ul className="expList">
                        <li>Worked with ModelSim for architecture & configuration verification</li>
                        <li>Performed validation/testing for digital hardware logic workflows</li>
                        <li>Contributed to improving verification reliability across project teams</li>
                      </ul>
                    </div>

                  </div>
            </section>

            <section id="skills" className="panel">
                  <h2>Technical Skills</h2>

                  <div className="skillsGrid">

                    <div className="skillCard">
                      <h3>Languages</h3>
                      <div className="pillRow">
                        <span className="pill">C</span>
                        <span className="pill">C++</span>
                        <span className="pill">Python</span>
                        <span className="pill">JavaScript</span>
                        <span className="pill">Java</span>
                        <span className="pill">C#</span>
                        <span className="pill">R</span>
                      </div>
                    </div>

                    <div className="skillCard">
                      <h3>Frontend</h3>
                      <div className="pillRow">
                        <span className="pill">React</span>
                        <span className="pill">Three.js</span>
                        <span className="pill">Vue.js</span>
                        <span className="pill">Angular</span>
                        <span className="pill">HTML5</span>
                        <span className="pill">CSS3</span>
                      </div>
                    </div>

                    <div className="skillCard">
                      <h3>Backend & APIs</h3>
                      <div className="pillRow">
                        <span className="pill">Node.js</span>
                        <span className="pill">Express.js</span>
                        <span className="pill">REST APIs</span>
                        <span className="pill">.NET</span>
                        <span className="pill">Flask</span>
                      </div>
                    </div>

                    <div className="skillCard">
                      <h3>Databases & Cloud</h3>
                      <div className="pillRow">
                        <span className="pill">MongoDB</span>
                        <span className="pill">PostgreSQL</span>
                        <span className="pill">MySQL</span>
                        <span className="pill">AWS</span>
                        <span className="pill">EC2</span>
                        <span className="pill">S3</span>
                        <span className="pill">Azure</span>
                      </div>
                    </div>

                    <div className="skillCard">
                      <h3>Testing & Tools</h3>
                      <div className="pillRow">
                        <span className="pill">Selenium</span>
                        <span className="pill">PyTest</span>
                        <span className="pill">Jira</span>
                        <span className="pill">QTest</span>
                        <span className="pill">Tableau</span>
                        <span className="pill">Postman</span>
                        <span className="pill">Docker</span>
                        <span className="pill">R Studio</span>
                      </div>
                    </div>

                    <div className="skillCard">
                      <h3>Concepts</h3>
                      <div className="pillRow">
                        <span className="pill">Agile</span>
                        <span className="pill">Scrum</span>
                        <span className="pill">SDLC</span>
                        <span className="pill">Cloud Computing</span>
                        <span className="pill">DBMS</span>
                        <span className="pill">Software Testing</span>
                        <span className="pill">Internet Computing</span>
                      </div>
                    </div>

                  </div>
             </section>


        <section id="projects" className="panel">
  <div className="projectsTop">
    <h2>Projects</h2>
  </div>

  <div className="projectsProGrid">
    <button
          className="projCard"
          onClick={() => onSelectProject(projects.find(p => p.id === "trusight"))}
        >
          <div className="projMeta">
            <div className="projTitle">TruSight — AI Image Authenticity Detection</div>
            <div className="projTag">Perceptual Hashing • Similarity Search • Neural Signals</div>
          </div>

          <div className="projBody">
            TruSight helps identify whether an image is likely authentic or AI-generated by combining perceptual hashing
            signals with learned/semantic features for more reliable detection.
          </div>

          <div className="projBullets">
            <div><span className="dot2" /> Perceptual hashing pipeline for near-duplicate / manipulation cues</div>
            <div><span className="dot2" /> Neural/semantic features to strengthen robustness beyond hashes</div>
            <div><span className="dot2" /> Designed for explainable outputs and iterative evaluation</div>
          </div>

          <div className="projFooter">
            <span className="pill">Python</span>
            <span className="pill">Perceptual Hashing</span>
            <span className="pill">AI Detection</span>
            <span className="pill">Evaluation</span>
          </div>
        </button>

    <button className="projCard" onClick={() => onSelectProject(projects.find(p => p.id === "trigas"))}>
      <div className="projMeta">
        <div className="projTitle">TriGas Incubator Dashboard</div>
        <div className="projTag">React • Raspberry Pi • Control UI</div>
      </div>
      <div className="projBody">
        Touch-optimized dashboard for monitoring + configuring incubator gas levels (O₂/CO₂/N₂) with safety-oriented UX.
      </div>
      <div className="projBullets">
        <div><span className="dot2" /> Real-time monitoring & manual setpoints</div>
        <div><span className="dot2" /> Modal-based workflows for alarm limits / deadband</div>
        <div><span className="dot2" /> Designed for constrained screen + performance</div>
      </div>
      <div className="projFooter">
        <span className="pill">React</span><span className="pill">Raspberry Pi</span><span className="pill">UI/UX</span>
      </div>
    </button>

    <button className="projCard" onClick={() => onSelectProject(projects.find(p => p.id === "smartcity"))}>
      <div className="projMeta">
        <div className="projTitle">Smart City Dashboard (ELL)</div>
        <div className="projTag">React • MongoDB Atlas • Data Viz</div>
      </div>
      <div className="projBody">
        Interactive dashboard to explore city sanitation insights using maps, trends, and analytics for decision-making.
      </div>
      <div className="projBullets">
        <div><span className="dot2" /> Responsive React frontend for non-technical users</div>
        <div><span className="dot2" /> MongoDB Atlas as primary data layer</div>
        <div><span className="dot2" /> Filtering + dashboard-level aggregation patterns</div>
      </div>
      <div className="projFooter">
        <span className="pill">React</span><span className="pill">MongoDB</span><span className="pill">Dashboards</span>
      </div>
    </button>

    <button className="projCard" onClick={() => onSelectProject(projects.find(p => p.id === "caterpal"))}>
      <div className="projMeta">
        <div className="projTitle">AI Restaurant Chatbot (1st Place)</div>
        <div className="projTag">Flask • MongoDB • OpenAI API</div>
      </div>
      <div className="projBody">
        AI assistant that recommends food based on preferences + dietary constraints and supports surplus food donation workflow.
      </div>
      <div className="projBullets">
        <div><span className="dot2" /> Intent-based filtering + recommendations</div>
        <div><span className="dot2" /> Donation workflow for catering surplus</div>
        <div><span className="dot2" /> Feedback loop for personalization</div>
      </div>
      <div className="projFooter">
        <span className="pill">Flask</span><span className="pill">MongoDB</span><span className="pill">LLM</span>
      </div>
    </button>

    <button className="projCard" onClick={() => onSelectProject(projects.find(p => p.id === "flight"))}>
      <div className="projMeta">
        <div className="projTitle">Flight Explorer</div>
        <div className="projTag">Node/Express • PostgreSQL • AWS</div>
      </div>
      <div className="projBody">
        Full-stack explorer for airlines/airports/routes with distance calculations and robust API endpoints.
      </div>
      <div className="projBullets">
        <div><span className="dot2" /> REST APIs + validation patterns</div>
        <div><span className="dot2" /> Postgres-backed CRUD + search</div>
        <div><span className="dot2" /> Deployment-ready AWS workflow</div>
      </div>
      <div className="projFooter">
        <span className="pill">Node</span><span className="pill">Postgres</span><span className="pill">AWS</span>
      </div>
    </button>
</div>

      
        </section>

        <section id="contact" className="panel">
          <h2>Contact</h2>

  <div className="contactRow">
    <a className="btn primary" href="/AyushGehlot_SE-.pdf" target="_blank" rel="noreferrer">
      Download Resume
    </a>
    <a className="btn" href="mailto:ayushgehlot100@gmail.com">
      Email Me
    </a>
  </div>

  <form
    className="contactForm"
    onSubmit={(e) => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const name = fd.get("name");
      const email = fd.get("email");
      const msg = fd.get("message");
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
      window.location.href = `mailto:ayushgehlot100@gmail.com?subject=Portfolio%20Message&body=${body}`;
    }}
  >
    <div className="row2">
      <input name="name" placeholder="Your name" required />
      <input name="email" placeholder="Your email" type="email" required />
    </div>
    <textarea name="message" placeholder="Message" rows={4} required />
    <button className="btn primary" type="submit">Send</button>
  </form>

  <div className="contactHint"></div>
          <p>Email: ayushgehlot100@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/ayush-gehlot/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/ayush-gehlot/</a></p>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Ayush Gehlot — Spacefolio
        </footer>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modalBackdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCloseProject}
          >
            <motion.div
              className="modal"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modalTop">
                <div>
                  <div className="modalTitle">{selectedProject.title}</div>
                  <div className="modalTag">{selectedProject.tag}</div>
                </div>

                <button className="iconBtn" onClick={onCloseProject}>
                  ✕
                </button>
              </div>

              <p className="modalDesc">{selectedProject.desc}</p>

              <div className="chips">
                {selectedProject.stack?.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>

              <div className="modalActions">
                <a className="btn primary" href={selectedProject.links?.live || "#"} onClick={(e)=>{ if(!selectedProject.links?.live) e.preventDefault(); }}>
                  Live Demo
                </a>
                <a className="btn" href={selectedProject.links?.github || "#"} onClick={(e)=>{ if(!selectedProject.links?.github) e.preventDefault(); }}>
                  GitHub
                </a>
              </div>

              <div className="modalHint">
                (Add your real links in <code>src/data/projects.js</code>)
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default Overlay;
