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
  }),
  dispatch => ({
    onIssueUpVote: issueId => dispatch(actions.upvoteIssueDelayed(issueId)),
    onIssueDownVote: issueId => dispatch(actions.downvoteIssue(issueId)),
    onIssueCreate: title => dispatch(actions.createNewIssue(title)),
  })
)(IssuePage);

