interface ExampleCardProps {
  title: string;
  description: string;
}

export function ExampleCard({ title, description }: ExampleCardProps) {
  return (
    <article style={{
      padding: '24px',
      borderRadius: '12px',
      backgroundColor: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
    }}>
      <h3 style={{ margin: '0 0 8px', color: 'var(--color-text)' }}>{title}</h3>
      <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
        {description}
      </p>
    </article>
  );
}
