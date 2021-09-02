import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import HeaderNav from './HeaderNav';
import About from './pages/About';
import Details from './pages/Details';
import Home from './pages/Home';
import PageError from './pages/PageError';
import { ERoute } from './components.module';

const Contents: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <HeaderNav />
      <TransitionGroup className="main-page">
        <CSSTransition timeout={300} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route component={Home} path={ERoute.HOME} exact />
            <Route component={About} path={ERoute.ABOUT} />
            <Route component={Details} path={`${ERoute.DETAILS}-:article`} />
            <Route component={PageError} path="*" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Contents;
