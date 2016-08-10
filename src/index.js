import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();
render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRootContainer = require('./containers/Root').default;

    render(
      <AppContainer><NextRootContainer store={store} /></AppContainer>,
      document.getElementById('root')
    );
  });
}
