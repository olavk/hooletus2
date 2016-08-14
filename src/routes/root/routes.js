import React from 'react';
import {Route} from 'react-router';
import App2 from '../app/App2';

const TestComponent = () => {
  console.log('re');
  return <div>testComponent</div>;
};
// Configure routes like normal
const routes = (
  <Route path="/" component={TestComponent}>
    <Route path="app2" component={App2} />
  </Route>
);
export default routes;
