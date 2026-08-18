function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        OF<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#about">À propos</a>
        <a href="#experience">Expériences</a>
        <a href="#education">Formation</a>
        <a href="#projects">Projets</a>
        <a href="#skills">Compétences</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar