import React from 'react'
import { connect } from 'react-redux'
import IssueList from './IssueList'
import NewIssueForm from './NewIssueForm'
import { sortBy, pick } from 'ramda'
import * as actions from '../actions.js'


function IssuePage(props) {
	const issueListProps = pick(
		['issues', 'onIssueUpVote', 'onIssueDownVote'],
		props);

	const newIssueFormProps = pick(
		['onIssueCreate'],
		props);

	return (
		<div>
			<IssueList {...issueListProps} />
			<NewIssueForm {...newIssueFormProps} />
		</div>
	);
}

export default connect(
  state => ({ 
  	issues: sortBy(x => x.downVotes - x.upVotes, state.issues),
  }),
  dispatch => ({
  	onIssueUpVote: issueId => dispatch(actions.upvoteIssueDelayed(issueId)),
  	onIssueDownVote: issueId => dispatch(actions.downvoteIssue(issueId)),
  	onIssueCreate: title => dispatch(actions.createNewIssue(title)),
  })
)(IssuePage)

