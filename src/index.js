import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './routes/root/Root';
import configureStore from './store/configureStore';

const store = configureStore();
render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./routes/root/Root', () => {
    const NextRootContainer = require('./routes/root/Root').default;

    render(
      <AppContainer><NextRootContainer store={store} /></AppContainer>,
      document.getElementById('root')
    );
  });
}
