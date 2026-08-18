function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="section-label">CONTACT</p>

      <h2>Travaillons ensemble.</h2>

      <p>
        Je suis actuellement à la recherche d'opportunités en développement
        logiciel, notamment en Java, développement Full Stack et conception
        d'applications.
      </p>

      <div className="contact-buttons">
        <a
          href="mailto:finniss25@gmail.com"
          className="primary-button"
        >
          Me contacter
        </a>

        <a
          href="/CV_FINNISS_Oswald_Billy.pdf"
          className="secondary-button"
          download
        >
          Télécharger mon CV
        </a>

        <a
          href="https://www.linkedin.com/in/billy-oswald-finniss-6033781b8/"
          className="secondary-button"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/osfinniss"
          className="secondary-button"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact