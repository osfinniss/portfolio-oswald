const skills = [
  {
    title: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Python",
      "Hibernate",
      "Node.js",
      "PHP",
      "REST API"
    ]
  },

  {
    title: "Frontend",
    items: [
      "React",
      "Angular",
      "JavaScript",
      "JSP",
      "HTML",
      "CSS"
    ]
  },

  {
    title: "Bases de données",
    items: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "PL/pgSQL"
    ]
  },

  {
    title: "DevOps & Outils",
    items: [
      "Git",
      "GitLab",
      "Maven",
      "Jenkins",
      "Docker",
      "Sonar",
      "Ansible",
      "Jira"
    ]
  },

  {
    title: "Autres langages",
    items: [
      "C++",
      "Bash",
      "Kotlin",
      "XML"
    ]
  }
]

function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label">COMPÉTENCES</p>

      <h2 className="section-title">
        Les technologies que j'utilise.
      </h2>

      <div className="skills-grid">
        {skills.map((category) => (
          <article className="skill-card" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills