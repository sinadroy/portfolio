/**
 * Example feature module — demonstrates the self-contained feature folder pattern.
 *
 * A real feature would export its primary component and keep all
 * related hooks, services, and sub-components co-located here.
 */

/* ── Feature components ─────────────────────────── */
export { ExampleCard } from './components/ExampleCard';

/* ── Feature hooks ──────────────────────────────── */
export { useExample } from './hooks/useExample';
