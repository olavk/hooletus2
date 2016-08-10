import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import TestComponent from '../components/TestComponent';

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <TestComponent />
        </div>
      </Provider>
    );
  }
}
Root.propTypes = {
  store: PropTypes.object,
};
