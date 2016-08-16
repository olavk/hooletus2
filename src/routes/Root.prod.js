import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import getRoutes from './routes';

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          {getRoutes()}
        </Router>
      </Provider>
    );
  }
}
Root.propTypes = {
  store: PropTypes.object,
};
