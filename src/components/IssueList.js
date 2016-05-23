import React from 'react';
import template from './IssueList.rt';

class IssueList extends React.Component {
  render() {
    return template.call(this);
  }
}

module.exports = IssueList;

