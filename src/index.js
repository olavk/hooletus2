import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import Root from './routes/Root';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

function renderApp(RootComponent) {
  render(
    <AppContainer>
      <RootComponent store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );
}

renderApp(Root);

if (module.hot) {
  module.hot.accept('./routes/Root', () => {
    const NextRootContainer = require('./routes/Root').default;

    renderApp(NextRootContainer);
  });
}
