function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-label">PROJETS</p>

      <h2 className="section-title">
        Quelques projets sur lesquels j'ai travaillé.
      </h2>

      <div className="projects-grid">

        {/* 01 - PAC-MAN */}
        <article className="project-card">
          <span className="project-number">01</span>

          <h3>Pac-Man</h3>

          <p>
            Développement d’un jeu Pac-Man en Java dans le cadre d’un projet
            consacré aux Design Patterns. Conception d’une architecture MVC,
            gestion des déplacements, des collisions, des fantômes, des
            pac-gommes et des capsules, ainsi que des fonctionnalités de pause
            et de contrôle de la vitesse du jeu.
          </p>

          <div className="project-images">
            <div className="project-image">
              <img
                src="/images/Pacman_game.PNG"
                alt="Aperçu du jeu Pac-Man"
              />
              <span>Aperçu du jeu</span>
            </div>
          </div>

          <div className="technologies">
            <span>Java</span>
            <span>Java Swing</span>
            <span>MVC</span>
            <span>Design Patterns</span>
          </div>
        </article>


        {/* 02 - MONSTRES SOUS LE LIT */}
        <article className="project-card">
          <span className="project-number">02</span>

          <h3>Monstres sous le lit</h3>

          <p>
            Conception d’un solveur pour le jeu combinatoire « Monstres sous le
            lit » à l’aide de la programmation par contraintes. Modélisation
            CSP, résolution automatique des défis, vérification de l’unicité
            des solutions et génération de nouveaux niveaux, avec une interface
            graphique interactive.
          </p>

          <div className="project-images">

            <div className="project-image">
              <img
                src="/images/Aperçu_du_Monstre_sous_le_lit.PNG"
                alt="Aperçu du jeu Monstres sous le lit"
              />
              <span>Aperçu du jeu</span>
            </div>
          </div>

          <div className="technologies">
            <span>Python</span>
            <span>PyCSP3</span>
            <span>Tkinter</span>
            <span>CSP</span>
          </div>
        </article>


        {/* 03 - PLATEFORME DE RECRUTEMENT */}
        {/* 03 - PLATEFORME DE RECRUTEMENT */}
        <article className="project-card">
          <span className="project-number">03</span>

          <h3>Plateforme de recrutement</h3>

          <p>
            Application web permettant aux recruteurs de publier leurs offres
            et aux candidats de postuler. Gestion de l'authentification, des
            rôles et du suivi des candidatures.
          </p>

          <div className="project-images">
            <div className="project-image">
              <img
                src="/images/Plateforme_de_recrutement.PNG"
                alt="Aperçu de la plateforme de recrutement"
              />
              <span>Aperçu de l'application</span>
            </div>
          </div>

          <div className="technologies">
            <span>Spring Boot</span>
            <span>React</span>
            <span>PostgreSQL</span>
            <span>JWT</span>
            <span>REST API</span>
          </div>
        </article>


        {/* 04 - COLORATION PONDÉRÉE */}
        <article className="project-card">
          <span className="project-number">04</span>

          <h3>Coloration pondérée de graphes</h3>

          <p>
            Application web développée dans le cadre d’un projet de Master 2
            permettant de résoudre des problèmes de coloration de graphes
            standards et pondérés. Mise en œuvre d’algorithmes gloutons et de
            recherche locale, avec visualisation pas à pas de leur exécution
            et comparaison de leurs performances.
          </p>

          <div className="project-images">
            <div className="project-image">
              <img
                src="/images/Coloration_de_graphe.PNG"
                alt="Aperçu de l'application de coloration pondérée de graphes"
              />
              <span>Aperçu de l'application</span>
            </div>
          </div>

          <div className="technologies">
            <span>Spring Boot</span>
            <span>React</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>Algorithmes</span>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects