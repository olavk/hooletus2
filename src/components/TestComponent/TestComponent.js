import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {setValue} from './TestComponentActions';

class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.handleChangeBound = this.handleChange.bind(this);
  }
  handleChange(se) {
    const value = se.target.value;
    this.props.setValue(value);
  }
  render() {
    const {value} = this.props;
    return (
      <input type="text" value={value} onChange={this.handleChangeBound} />
    );
  }
}
TestComponent.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};
export default connect(
  state => ({value: state.testComponent.value}),
  {setValue}
)(TestComponent);
