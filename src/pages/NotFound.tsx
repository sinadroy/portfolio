import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section style={{ textAlign: 'center', paddingTop: '80px' }}>
      <h1 style={{ fontSize: '4rem', margin: 0 }}>404</h1>
      <p style={{ color: 'var(--color-text-secondary)' }}>Page not found.</p>
      <Link to="/" style={{ color: 'var(--color-primary)' }}>
        Go back home
      </Link>
    </section>
  );
}
