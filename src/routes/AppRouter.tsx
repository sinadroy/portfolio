import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';
import { NotFound } from '../pages/NotFound';
import { ROUTES } from '../config/constants';
import { Documentation } from '../pages/Documentation';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.ABOUT, element: <About /> },
      { path: ROUTES.PROJECTS, element: <Projects /> },
      { path: ROUTES.CONTACT, element: <Contact /> },
      { path: ROUTES.DOCUMENTATION, element: <Documentation /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
