import { NavLink } from 'react-router-dom';
import { getRouteDefinitions } from '../../routes';
import './Header.scss';
import logo from '../../assets/img/logo-small-amarela.png';
import useBreakpointObserver from '../../hooks/use-breakpoint-observer';
import { useCallback } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header() {
  const { isDesktop } = useBreakpointObserver();

  const getNavigationItems = useCallback(() => {
    const routes = getRouteDefinitions();

    return (
      routes.map(({ path, title }, index) => (
        <NavLink
          to={path}
          key={`${path}-${index}`}
          className={({ isActive }) =>
            'header-navigation-link ' + (isActive ? 'active' : '')
          }
        >
          {title}
        </NavLink>
      ))
    )
  }, []);

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
        { isDesktop 
            ? getNavigationItems() 
            : (
              <BurgerMenu>
                {getNavigationItems()} 
              </BurgerMenu>
            )
        }
      </nav>
    </header>
  );
}

export default Header;
