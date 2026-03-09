import { Outlet, Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, APP_NAME } from '../config/constants';
import { cn } from '../utils/helpers';
import './MainLayout.css';

export function MainLayout() {
  const { pathname } = useLocation();

  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__header-inner">
          <Link to="/" className="layout__logo">
            {APP_NAME}
          </Link>

          <nav className="layout__nav">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn('layout__nav-link', pathname === item.path && 'layout__nav-link--active')}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="layout__main">
        <Outlet />
      </main>

      <footer className="layout__footer">
        <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
      </footer>
    </div>
  );
}
