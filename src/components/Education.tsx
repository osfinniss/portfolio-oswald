function Education() {
  return (
    <section id="education" className="section">
      <p className="section-label">FORMATION</p>

      <h2 className="section-title">
        Mon parcours universitaire.
      </h2>

      <div className="education-grid">

        <article className="education-card">
          <span className="period">2023 — 2025</span>

          <h3>Master Informatique</h3>

          <p className="company">
            Université d'Angers
          </p>

          <p>
            Architecture logicielle, sécurité des systèmes d'information,
            Data Engineering et gestion de projet IT.
          </p>
        </article>

        <article className="education-card">
          <span className="period">2022 — 2023</span>

          <h3>Licence Informatique</h3>

          <p className="company">
            Université d'Angers
          </p>

          <p>
            Développement logiciel, bases de données, CI/CD et RGPD.
          </p>
        </article>

      </div>
    </section>
  )
}

export default Education