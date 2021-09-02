import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ERoute } from './components.module';

const HeaderNav: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header-nav">
      <div className="wrapper">
        <nav className="header-nav__menu">
          <NavLink to={ERoute.HOME} className={`text text-header ${location.pathname === ERoute.HOME && 'selected'}`}>
            Home
          </NavLink>
          <NavLink to={ERoute.ABOUT} className={`text text-header ${location.pathname === ERoute.ABOUT && 'selected'}`}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
