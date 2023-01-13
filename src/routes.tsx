import { SnackbarProvider } from 'notistack';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { VIEWPORT } from './globals';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import TeamPage from './pages/TeamPage/TeamPage';

interface RouteDefinition {
  title: string;
  path: string;
  ReactComponent: JSX.Element;
}

export function getRouteDefinitions(): RouteDefinition[] {
  return [
    {
      title: 'Home',
      path: '/',
      ReactComponent: <HomePage />,
    },
    {
      title: 'Serviços',
      path: '/servicos',
      ReactComponent: <ServicesPage />,
    },
    {
      title: 'Executivos',
      path: '/executivos',
      ReactComponent: <TeamPage />,
    },
    {
      title: 'Contato',
      path: '/contato',
      ReactComponent: <ContactPage />,
    },
  ];
}

export default function AppRouter() {
  const routes = getRouteDefinitions();

  return (
    <Router>
      <SnackbarProvider 
        dense={VIEWPORT.IS_MOBILE}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        className='custom-snackbar-item'
        maxSnack={3}>
        <Header />
        <main className="container">
          <Routes>
            {routes.map(({ path, ReactComponent }) => (
              <Route key={path} path={path} element={ReactComponent} />
            ))}
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </main>
        <Footer />
      </SnackbarProvider>
    </Router>
  );
}
