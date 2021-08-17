import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { About } from '../pages/about';
import { Dashboard } from '../pages/dashboard';
import { DetailArticle } from '../pages/detail/detailArticle';
import { NotFound } from '../pages/notFound/notFound';

export const AppRouter = () => (
  <Switch>
    <Route exact path="/about">
      <About />
    </Route>
    <Route path="/error">
      <NotFound />
    </Route>
    <Route exact path="/">
      <Dashboard />
    </Route>
    {/* /:urlToImage/:description/:author/:publishedAt */}
    <Route exact path="/details/:title">
      <DetailArticle />
    </Route>
    <Redirect to="/error" />
  </Switch>
);
