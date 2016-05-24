import {findIndex, adjust} from 'ramda';
import initialState from './initialState';
import * as actionTypes from './../actionTypes';

const upvote = issue => {
  issue.upVotes++;
  return issue;
};

const downvote = issue => {
  issue.downVotes++;
  return issue;
};

const upvoteIssue = (state, issueId) => {
  const index = findIndex(i => i.id === issueId, state);
  return adjust(upvote, index, state);
};

const downvoteIssue = (state, issueId) => {
  const index = findIndex(i => i.id === issueId, state);
  return adjust(downvote, index, state);
};

const createNewIssue = (state, newIssue) => [...state, newIssue];

export default function update(state, action) {
  state = state || initialState; //karma does not assign default params - needs reconfiguring

  switch (action.type) {
    case actionTypes.UPVOTE_ISSUE_SUCCESS:
      return upvoteIssue(state, action.issueId);

    case actionTypes.DOWNVOTE_ISSUE_SUCCESS:
      return downvoteIssue(state, action.issueId);

    case actionTypes.CREATE_NEW_ISSUE_SUCCESS:
      return createNewIssue(state, action.body);

    default:
      return state;
  }

}
