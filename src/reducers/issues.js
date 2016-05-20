import { findIndex, adjust, sortBy, compose, append } from 'ramda';
import initialState from './initialState';

const upvote = issue => {
	issue.upVotes++;
	return issue;
}

const downvote = issue => {
	issue.downVotes++;
	return issue;
}

const sortByRating = sortBy(x => x.upVotes - x.downVotes)

export default function update(state = initialState, action) {
	if(action.type === 'UPVOTE') {
		const index = findIndex(i => i.id === action.issueId, state);
		return adjust(upvote, index, state)
	}
	else if(action.type === 'DOWNVOTE') {
		const index = findIndex(i => i.id === action.issueId, state);
		return adjust(downvote, index, state)
	}
	else if (action.type === 'CREATE_NEW_ISSUE') {
		return append({
			id: Math.floor(Math.random() * 1000),
			title: action.title,
			upVotes: 0,
			downVotes: 0,
		}, state)
	}

	return state
}
