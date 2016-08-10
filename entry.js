import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import TestComponent from './TestComponent';

render(
  <AppContainer>
    <TestComponent />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./TestComponent', () => {
    const NextRootContainer = require('./TestComponent').default;

    render(
      <AppContainer><NextRootContainer /></AppContainer>,
      document.getElementById('root')
    );
  });
}
