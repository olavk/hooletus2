import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import TestComponent from '../../components/TestComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const {children} = this.props;
    return (
      <div>
        <TestComponent />
        <Link to="/app2">app2</Link>
        {children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.node,
};
