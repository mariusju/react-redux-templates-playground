import React from 'react';
import template from './LoadingIndicator.rt';

class LoadingIndicator extends React.Component {
  render() {
    return template.call(this);
  }
}

LoadingIndicator.propTypes = {
  loading: React.PropTypes.bool.isRequired
};

module.exports = LoadingIndicator;
