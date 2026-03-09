import { createContext, useContext, useState, type ReactNode } from 'react';

/**
 * Global application state managed via React Context.
 * Extend AppState and the provider as features grow.
 */

interface AppState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppState {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an <AppProvider>');
  }
  return context;
}
