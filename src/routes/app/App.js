import React, {Component} from 'react';
import TestComponent from '../../components/TestComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return <TestComponent />;
  }
}
