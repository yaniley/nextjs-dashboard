"use client";
export default function Page() {
    return (
        <>
  <header>
    <nav className="navbar">
      <div className="nav-logo">Yaniley Rhobie C. Daroca</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="docs/resume.pdf" download className="resume-btn">Download Resume</a></li>
      </ul>
    </nav>
    <div className="hero">
      <img src="img/yan-1.jpg" alt="Profile" className="hero-img" />
      <div className="hero-text">
        <h1>Hello, I'm <span>Yaniley Rhobie</span></h1>
        <p>An ICT student at Batanes State College, and currently in junior year.</p>
        <a href="#projects" className="btn-primary">View Projects</a>
      </div>
    </div>
  </header>

  <main>

    <section id="about" className="section about">
      <h2>About Me</h2>
      <p>
        Kapian Dios! I'm Yaniley Rhobie, and I'm currently a student working toward a degree in Information Technology. 
        This wasn't my first choice of career path, but I'm giving it my best effort and exploring where tech might take me, learning step by step.
      </p>
        
        
     <p>
        I’m not trying to pretend to be an expert or overly passionate—I'm simply doing my best. I hope to growth, opportunities, and challenges that can help me figure out my future direction.
      </p>
    </section>

    <section id="projects" className="section projects">
      <h2>Sample Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>No Projects Yet</h3>
          <p>--</p>
        </div>
        <div className="project-card">
          <h3>No Projects Yet</h3>
          <p>--</p>
        </div>
        <div className="project-card">
          <h3>No Projects Yet</h3>
          <p>--</p>
        </div>
      </div>
    </section>
  </main>
    

  <section className="section contact" id="contact">
  <h2>Contact Me</h2>
  <p>Feel free to reach out through any of the platforms below:</p>
  <div className="contact-links">
    <a href="https://www.facebook.com/yanieyrhobie.daroca/" target="_blank" className="contact-card">
      <span className="ico-circle"><i className="bi bi-facebook"></i></span>
      <span className="platform-name">Facebook</span>
    </a>

    <a href="https://www.instagram.com/ynlraa._/" target="_blank" className="contact-card">
      <span className="ico-circle"><i className="bi bi-instagram"></i></span>
      <span className="platform-name">Instagram</span>
    </a>

    <a href="https://www.linkedin.com/in/yaniley-rhobie-daroca-b5a830378/" target="_blank" className="contact-card">
      <span className="ico-circle"><i className="bi bi-linkedin"></i></span>
      <span className="platform-name">LinkedIn</span>
    </a>
  </div>
</section>




  <footer>
    <p>© 2025 Yaniley Rhobie C. Daroca. All rights reserved.</p>
  </footer>
        </>
    )
}