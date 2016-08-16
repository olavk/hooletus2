import React from 'react';
import {Route} from 'react-router';
import App from './app/App';
import App2 from './app/App2';

export default function getRoutes() {
  return (
    <Route path="/" component={App}>
      <Route path="/app2" component={App2} />
    </Route>
  );
}
