import React from 'react';
import { NavLink } from 'react-router-dom';
import { getRouteDefinitions } from '../../routes';
import './Header.scss';

function Header() {
    const routes = getRouteDefinitions();

    return (
        <nav>
            {routes.map(({path, title}, index) => 
                <NavLink 
                    key={`${path}-${index}`}
                    className={({ isActive }) => (isActive ? 'active' : '')} 
                    to={path}>
                    {title}
                </NavLink>
            )}
        </nav>
    );
}

export default Header;
