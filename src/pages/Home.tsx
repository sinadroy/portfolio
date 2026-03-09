import './Home.css';

export function Home() {
  return (
    <section className="home">
      <div className="home__hero">
        <span className="home__badge">Welcome</span>
        <h1 className="home__title">
          Hi, I'm <span className="home__accent">Your Name</span>
        </h1>
        <p className="home__subtitle">
          Full-stack developer crafting modern web experiences.
        </p>
      </div>
    </section>
  );
}
