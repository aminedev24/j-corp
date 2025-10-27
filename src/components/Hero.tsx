const Hero = () => (
  <header className="hero">
    <nav className="hero__nav">
      <span className="hero__brand">J-Corp</span>
      <a className="hero__contact" href="#contact">
        Contact
      </a>
    </nav>
    <div className="hero__content">
      <h1>
        Building ventures that connect{" "}
        <span className="hero__accent">technology, sport, and lifestyle.</span>
      </h1>
      <p>
        J-Corp (Johnny Corp) partners with investors and change-makers to launch Arduino-powered hardware,
        digital products, and the CaliGymnic performance movement alongside elevated food and lifestyle
        concepts.
      </p>
      <div className="hero__actions">
        <a className="button button--primary" href="#it">
          View Focus Areas
        </a>
        <a className="button button--secondary" href="#contact">
          Meet the Team
        </a>
        <a className="button button--ghost" href="https://github.com/aminedev24" target="_blank" rel="noreferrer">
          View GitHub
        </a>
      </div>
    </div>
  </header>
);

export default Hero;
