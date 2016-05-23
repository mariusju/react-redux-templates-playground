import React from 'react';
import template from './Issue.rt';

class Issue extends React.Component {

  upVote() {
    this.props.onIssueUpVote(this.props.issue.id);
  }

  downVote() {
    this.props.onIssueDownVote(this.props.issue.id);
  }

  render() {
    return template.call(this);
  }
}

module.exports = Issue;

