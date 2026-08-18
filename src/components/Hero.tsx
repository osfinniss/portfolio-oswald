function Hero() {
  return (
    <section className="hero">
      <p className="hero-intro">Bonjour, je suis</p>

      <h1>Oswald Billy FINNISS</h1>

      <h2>Développeur logiciel</h2>

      <p className="hero-description">
        Diplômé d'un Master 2 Informatique de l'Université d'Angers,
        je développe des applications web et logicielles avec un intérêt
        particulier pour Java, Spring Boot et le développement Full Stack.
      </p>

      <div className="technologies">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>React</span>
        <span>Python</span>
        <span>PostgreSQL</span>
        <span>C++</span>
      </div>

      <div className="scroll-indicator">
        <span>Découvrir mon parcours</span>
        <span>↓</span>
      </div>
    </section>
  )
}

export default Hero