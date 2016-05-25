import React from 'react';
import {connect} from 'react-redux';
import {sortBy} from 'ramda';
import * as actions from '../actions.js';
import template from './IssuePage.rt';


class IssuePage extends React.Component {
  render() {
    return template.call(this);
  }
}

module.exports = connect(
  state => ({
    issues: sortBy(x => x.downVotes - x.upVotes, state.issues),
    loading: state.requests > 0,
  }),
  dispatch => ({
    onIssueUpVote: issueId => dispatch(actions.upvoteIssueAsync(issueId)),
    onIssueDownVote: issueId => dispatch(actions.downvoteIssueAsync(issueId)),
    onIssueCreate: title => dispatch(actions.createNewIssueAsync(title)),
    onCommentCreate: options => dispatch(actions.createNewCommentAsync(options))
  })
)(IssuePage);

