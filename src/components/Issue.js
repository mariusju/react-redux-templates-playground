import React from 'react';
import template from './Issue.rt';

class Issue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commentsVisible: false
    };
  }

  toggleComments() {
    this.setState({
      commentsVisible: !this.state.commentsVisible
    });
  }

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

Issue.propTypes = {
  issue: React.PropTypes.object.isRequired,
  onIssueUpVote: React.PropTypes.func.isRequired,
  onIssueDownVote: React.PropTypes.func.isRequired,
  onCommentCreate: React.PropTypes.func.isRequired,
};

module.exports = Issue;


