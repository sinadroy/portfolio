import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './store/AppContext';
import { router } from './routes/AppRouter';

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
