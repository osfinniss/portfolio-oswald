function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-label">EXPÉRIENCES</p>

      <h2 className="section-title">
        Mon parcours professionnel.
      </h2>

      <div className="timeline">

        <article className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Ingénieur Logiciel</h3>
              <p className="company">Capgemini · Stage</p>
            </div>

            <span className="period">
              Février 2025 — Août 2025
            </span>
          </div>

          <p className="experience-description">
            Intégration au projet de gestion du système d'information de
            l'Agence de Services et de Paiement dédié à la Politique Agricole
            Commune.
          </p>

          <ul>
            <li>
              Analyse des besoins et développement de nouvelles fonctionnalités.
            </li>

            <li>
              Identification et correction d'anomalies en production.
            </li>

            <li>
              Optimisation de requêtes SQL et des mappings Hibernate.
            </li>

            <li>
              Refonte d'API REST et mise en place de DTO.
            </li>

            <li>
              Évolution des règles métier et des modules de validation.
            </li>
          </ul>

          <div className="technologies">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Hibernate</span>
            <span>REST API</span>
            <span>Jenkins</span>
            <span>Sonar</span>
            <span>Maven</span>
            <span>Git</span>
            <span>Ansible</span>
          </div>
        </article>

        <article className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Développeur Full Stack</h3>
              <p className="company">Mangono · Stage</p>
            </div>

            <span className="period">
              Avril 2024 — Juillet 2024
            </span>
          </div>

          <p className="experience-description">
            Développement d'Issues, un outil interne permettant notamment
            de gérer les projets, le temps de travail et la facturation.
          </p>

          <ul>
            <li>
              Développement et évolution de fonctionnalités métier.
            </li>

            <li>
              Analyse et correction d'anomalies en production.
            </li>

            <li>
              Développement d'un système de facturation automatisée.
            </li>

            <li>
              Création d'un module helpdesk personnalisé.
            </li>

            <li>
              Automatisation des notifications et du workflow des tickets.
            </li>
          </ul>

          <div className="technologies">
            <span>Python</span>
            <span>Odoo</span>
            <span>XML</span>
            <span>GitLab</span>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Experience