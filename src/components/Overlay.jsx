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
            <h2>About Me</h2>

            <p className="aboutLead">
              I’m Ayush Gehlot, a Software Engineer and recent Master’s graduate in
              Computer Science from Pace University, New York, with concentration in
              Software Development. My work focuses on building scalable full-stack systems,
              immersive user interfaces, AI-assisted applications, and embedded software solutions.
            </p>

            <div className="currentlyCard">
              <div className="currentlyLabel">Currently Focused On</div>

              <div className="currentlyItems">
                <div>🚀 Full-stack engineering with React, Node.js, and cloud technologies</div>
                <div>🧠 AI-assisted systems, image authenticity research, and intelligent interfaces</div>
                <div>⚙️ Embedded systems, real-time monitoring dashboards, and Raspberry Pi applications</div>
              </div>
            </div>

            <div className="aboutGrid">

              {/* Core Engineering */}
              <div className="aboutCard">
                <h3>Core Engineering</h3>

                <ul className="aboutList">
                  <li><span className="dot2" /> Full-stack web development using React, Node.js, Express, and REST APIs</li>

                  <li><span className="dot2" /> Backend systems, database design, and API integration workflows</li>

                  <li><span className="dot2" /> Interactive UI/UX development with Three.js and responsive frontend design</li>

                  <li><span className="dot2" /> Real-time systems and embedded software development on Raspberry Pi</li>
                </ul>
              </div>

              {/* AI + Systems */}
              <div className="aboutCard">
                <h3>AI & Systems</h3>

                <ul className="aboutList">
                  <li><span className="dot2" /> AI-assisted image authenticity and perceptual similarity analysis</li>

                  <li><span className="dot2" /> Applied machine learning concepts and intelligent system prototyping</li>

                  <li><span className="dot2" /> PID-based environmental control systems and hardware interaction</li>

                  <li><span className="dot2" /> Exposure to cloud computing, scalable architectures, and deployment workflows</li>
                </ul>
              </div>

              {/* Software Process */}
              <div className="aboutCard">
                <h3>Software Process & Testing</h3>

                <ul className="aboutList">
                  <li><span className="dot2" /> Agile development, sprint planning, and collaborative engineering workflows</li>

                  <li><span className="dot2" /> Software testing concepts including Selenium, PyTest, and QA automation</li>

                  <li><span className="dot2" /> Experience using Jira, QTest, Postman, and developer productivity tools</li>

                  <li><span className="dot2" /> Focus on maintainable, testable, and production-oriented software design</li>
                </ul>
              </div>

              {/* Coursework */}
              <div className="aboutCard">
                <h3>Academic Foundation</h3>

                <ul className="aboutList">
                  <li><span className="dot2" /> Master’s in Computer Science — Pace University, New York</li>

                  <li><span className="dot2" /> Coursework in DBMS, Software Testing, Internet Computing, Cloud Computing, AI, SDLC, and Statistics</li>

                  <li><span className="dot2" /> Strong foundation in Data Structures & Algorithms and Object-Oriented Programming</li>

                  <li><span className="dot2" /> Experience with AWS, R Studio, Tableau, and data visualization workflows</li>
                </ul>
              </div>

            </div>
          </section>

        <section id="experience" className="panel">
          <h2>Professional Experience</h2>

              <div className="expGrid">

                {/* NYSCF */}
                <div className="expCard">
                  <div className="expTop">
                    <div>
                      <div className="expRole">Software Engineer</div>
                      <div className="expCompany">
                        The New York Stem Cell Foundation — New York, NY
                      </div>
                    </div>

                    <div className="expDate">Jun 2025 — Aug 2025</div>
                  </div>

                  <div className="expBody">
                    Worked alongside the R&D team to research and prototype a smart incubator
                    system designed to preserve human cells and blood samples under highly
                    controlled environmental conditions. Contributed across embedded systems,
                    control logic, and user interface development for monitoring and gas regulation.
                  </div>

                  <ul className="expList">
                    <li>
                      Developed a PID-based control system in C to regulate O₂, CO₂, N₂,
                      and internal incubator pressure in real time.
                    </li>

                    <li>
                      Built a React-based touchscreen dashboard on Raspberry Pi for
                      real-time monitoring, alarm configuration, and environmental parameter control.
                    </li>

                    <li>
                      Collaborated with researchers and engineers to improve usability,
                      stability, and responsiveness of the incubator workflow.
                    </li>

                    <li>
                      Worked with hardware communication, embedded workflows, and UI optimization
                      for constrained touchscreen environments.
                    </li>
                  </ul>
                </div>

                {/* Dream Team */}
                <div className="expCard">
                  <div className="expTop">
                    <div>
                      <div className="expRole">Full Stack Developer </div>
                      <div className="expCompany">
                        Dream Team Technologies Pvt. Ltd. — Rajasthan, India
                      </div>
                    </div>

                    <div className="expDate">Jun 2022 — Mar 2023</div>
                  </div>

                  <div className="expBody">
                    Worked with developers and UX/UI designers to build and improve a
                    university management platform focused on student operations such as
                    attendance tracking, assignments, enrollment, and secure payment handling.
                  </div>

                  <ul className="expList">
                    <li>
                      Developed responsive frontend interfaces using React, Angular,
                      Vue.js, HTML, CSS, and JavaScript.
                    </li>

                    <li>
                      Implemented OAuth-based authentication and integrated secure
                      payment workflows for protected user access.
                    </li>

                    <li>
                      Automated UI testing using Selenium and PyTest, reducing manual
                      testing effort and improving deployment efficiency.
                    </li>

                    <li>
                      Participated in Agile development workflows including sprint planning,
                      debugging, testing cycles, and collaborative feature reviews.
                    </li>
                  </ul>
                </div>

                {/* DRDO */}
                <div className="expCard">
                  <div className="expTop">
                    <div>
                      <div className="expRole">Hardware Engineer</div>
                      <div className="expCompany">
                        Defense Research & Development Organization (DRDO) — India
                      </div>
                    </div>

                    <div className="expDate">Jun 2021 — Mar 2022</div>
                  </div>

                  <div className="expBody">
                    Assisted in validation and verification workflows for digital hardware
                    systems designed using VHDL, with focus on simulation accuracy,
                    architecture validation, and testing reliability.
                  </div>

                  <ul className="expList">
                    <li>
                      Worked with ModelSim to validate VHDL-designed circuits and
                      simulate digital hardware behavior.
                    </li>

                    <li>
                      Performed syntax, architecture, and configuration verification
                      for hardware logic workflows.
                    </li>

                    <li>
                      Contributed to improving verification reliability and testing
                      consistency across engineering teams.
                    </li>

                    <li>
                      Gained exposure to hardware simulation, debugging methodologies,
                      and embedded engineering concepts.
                    </li>
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
        <section id="community" className="panel">
          <h2>Leadership & Community Impact</h2>

          <div className="communityGrid">

            <div className="communityCard featuredCommunity">
              <div className="communityTop">
                <div>
                  <div className="communityRole">
                    Founder & Volunteer Lead
                  </div>

                  <div className="communityOrg">
                    Paws and Wings Society
                  </div>
                </div>

                <div className="communityDate">
                  2019 — Present
                </div>
              </div>

              <div className="communityBody">
                Founded and actively lead “Paws and Wings Society,” an independent
                animal welfare initiative focused on rescuing, treating, rehabilitating,
                and supporting stray animals and injured birds through community-driven efforts.
              </div>

              <ul className="communityList">
                <li>
                  Organized rescue operations and emergency support for injured stray
                  animals and birds across local communities.
                </li>

                <li>
                  Coordinated vaccination drives, food distribution campaigns, and
                  awareness initiatives promoting animal welfare and responsible care.
                </li>

                <li>
                  Helped facilitate shelter support, adoption efforts, and rehabilitation
                  assistance for rescued animals.
                </li>

                <li>
                  Managed volunteers, community outreach, fundraising coordination,
                  and operational planning for welfare activities since 2019.
                </li>
              </ul>

              <div className="communityTags">
                <span className="pill">Leadership</span>
                <span className="pill">Community Impact</span>
                <span className="pill">Volunteer Work</span>
                <span className="pill">Animal Welfare</span>
              </div>
            </div>

          </div>
          <div className="communityCard">
            <div className="communityTop">
              <div>
                <div className="communityRole">
                  Member — AIESEC
                </div>

                <div className="communityOrg">
                  OGTA (Outgoing Global Talent) & IGTe (Incoming Global Teacher)
                </div>
              </div>

              <div className="communityDate">
                2018 — 2020
              </div>
            </div>

            <div className="communityBody">
              Contributed to international exchange and leadership development initiatives
              through AIESEC, collaborating with teams focused on global talent programs,
              cultural exchange, and international engagement opportunities.
            </div>

            <ul className="communityList">
              <li>
                Worked with the Outgoing Global Talent (OGTA) team to help students
                explore international internship and professional exchange opportunities.
              </li>

              <li>
                Assisted the Incoming Global Teacher (IGTe) team in coordinating
                communication, onboarding, and support for international participants.
              </li>

              <li>
                Participated in collaborative team activities, outreach efforts,
                leadership development workshops, and organizational events.
              </li>
            </ul>

            <div className="communityTags">
              <span className="pill">Leadership</span>
              <span className="pill">International Collaboration</span>
              <span className="pill">Teamwork</span>
              <span className="pill">Communication</span>
            </div>
          </div>
        <div className="communityCard">
            <div className="communityTop">
              <div>
                <div className="communityRole">
                  Volunteer
                </div>

                <div className="communityOrg">
                  Global Shapers Community — Jodhpur Hub
                </div>
              </div>

              <div className="communityDate">
                2021 — 2022
              </div>
            </div>

            <div className="communityBody">
              Participated in community-driven initiatives and volunteer activities
              focused on youth engagement, social impact, awareness programs,
              and collaborative local development efforts.
            </div>

            <ul className="communityList">
              <li>
                Supported local volunteering and outreach activities through
                collaborative community initiatives.
              </li>

              <li>
                Contributed to awareness campaigns and youth-focused engagement programs.
              </li>

              <li>
                Worked alongside volunteers and organizers to support community impact efforts.
              </li>
            </ul>

            <div className="communityTags">
              <span className="pill">Community Engagement</span>
              <span className="pill">Volunteer Work</span>
              <span className="pill">Youth Leadership</span>
            </div>
          </div>
        <div className="communityCard">
  <div className="communityTop">
    <div>
      <div className="communityRole">
        General Secretary — Student Union
      </div>

      <div className="communityOrg">
        MBM University, Rajasthan, India
      </div>
    </div>

    <div className="communityDate">
      2022 — 2023
    </div>
  </div>

            <div className="communityBody">
              Served as the elected General Secretary of the university’s independent
              student union body, representing student interests and coordinating
              welfare-focused initiatives, university activities, and large-scale student engagement programs.
            </div>

            <ul className="communityList">
              <li>
                Led coordination efforts between students, university administration,
                and organizational teams to support student welfare and campus activities.
              </li>

              <li>
                Organized and managed induction programs, student support operations,
                and multi-team coordination workflows for new admissions and onboarding.
              </li>

              <li>
                Worked with multiple student committees to oversee logistics,
                communication, event planning, and operational execution.
              </li>

              <li>
                Helped streamline student assistance and counseling activities
                during university admissions and orientation programs.
              </li>
            </ul>

            <div className="communityTags">
              <span className="pill">Leadership</span>
              <span className="pill">Operations</span>
              <span className="pill">Student Welfare</span>
              <span className="pill">Team Coordination</span>
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
    <a className="btn primary" href="public/AyushGehlot_SE-.pdf" target="_blank" rel="noreferrer">
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
