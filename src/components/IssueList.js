import React from 'react';
import template from './IssueList.rt';

class IssueList extends React.Component {
  render() {
    return template.call(this);
  }
}

IssueList.propTypes = {
  issues: React.PropTypes.array.isRequired,
  onIssueDownVote: React.PropTypes.func.isRequired,
  onIssueUpVote: React.PropTypes.func.isRequired,
  onCommentCreate: React.PropTypes.func.isRequired,
};

module.exports = IssueList;

