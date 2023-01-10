import React from 'react';
import { NavLink } from 'react-router-dom';
import { getRouteDefinitions } from '../../routes';
import './Header.scss';

function Header() {
  const routes = getRouteDefinitions();

  return (
    <nav>
      {routes.map(({ path, title }, index) => (
        <NavLink
          to={path}
          key={`${path}-${index}`}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Header;
