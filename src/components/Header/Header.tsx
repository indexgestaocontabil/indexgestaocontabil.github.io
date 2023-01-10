import { NavLink } from 'react-router-dom';
import { getRouteDefinitions } from '../../routes';
import './Header.scss';
import logo from '../../assets/img/logo-small-amarela.png';

function Header() {
  const routes = getRouteDefinitions();

  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to="/">
          <img
            src={logo}
            className="header-logo-image"
            alt="Index Gestão Contábil"
          />
        </NavLink>
      </div>

      <nav className="header-navigation">
        {routes.map(({ path, title }, index) => (
          <NavLink
            to={path}
            key={`${path}-${index}`}
            className={({ isActive }) =>
              'header-navigation-link ' + (isActive ? 'active' : '')
            }
          >
            {title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
