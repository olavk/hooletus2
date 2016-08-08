import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './TestComponent';

const rootNode = document.getElementById('root');
if (rootNode) {
  ReactDOM.render(<TestComponent />, rootNode);
}
