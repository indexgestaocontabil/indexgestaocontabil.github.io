import { NavLink } from 'react-router-dom';
import { getRouteDefinitions } from '../../routes';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/img/logo-dourada.svg';
import useBreakpointObserver from '../../hooks/use-breakpoint-observer';
import { useCallback } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  const { isDesktop } = useBreakpointObserver();

  const getNavigationItems = useCallback(
    (withDivider: boolean) => {
      const routes = getRouteDefinitions();
      const clazz = `is-${isDesktop ? 'desktop' : 'mobile'}`;

      return routes.map(({ path, title }, index) => (
        <div
          className={`header-navigation-item ${clazz}`}
          key={`header-navigation-item-${index}`}
        >
          <NavLink
            to={path}
            key={`${path}-${index}`}
            className={({ isActive }) =>
              'header-navigation-link ' + (isActive ? 'active' : '')
            }
          >
            {title}
          </NavLink>
          {withDivider && index < routes.length - 1 && (
            <div className="divider">|</div>
          )}
        </div>
      ));
    },
    [isDesktop]
  );

  return (
    <header className="header">
      <div className="header-logo">
        <Logo className="header-logo-image" />
      </div>

      <nav className={`header-navigation`}>
        {isDesktop ? (
          getNavigationItems(true)
        ) : (
          <BurgerMenu>{getNavigationItems(false)}</BurgerMenu>
        )}
      </nav>
    </header>
  );
};

export default Header;
