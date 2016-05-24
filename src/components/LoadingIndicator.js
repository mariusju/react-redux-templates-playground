import React from 'react';
import template from './LoadingIndicator.rt';

class LoadingIndicator extends React.Component {
  render() {
    console.log('this', this);
    return template.call(this);
  }
}

module.exports = LoadingIndicator;
