import React from 'react';
import {
  Redirect, Route, Switch, useLocation,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { About } from '../pages/about';
import { Dashboard } from '../pages/dashboard';
import { DetailArticle } from '../pages/detail/detailArticle';
import { NotFound } from '../pages/notFound/notFound';
import '../style.scss';

export const AppRouter = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Switch location={location}>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/error">
            <NotFound />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/details/:title">
            <DetailArticle />
          </Route>
          <Redirect to="/error" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
