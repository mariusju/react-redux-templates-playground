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

const createNewIssue = (state, title) => {
  return [
    ...state,
    {
      id: Math.floor(Math.random() * 1000),
      title: title,
      upVotes: 0,
      downVotes: 0,
    }
  ];
};

export default function update(state, action) {
  state = state || initialState; //somehow default params does not work in tests

  switch (action.type) {
    case actionTypes.UPVOTE_ISSUE_SUCCESS:
      return upvoteIssue(state, action.issueId);

    case actionTypes.DOWNVOTE:
      return downvoteIssue(state, action.issueId);

    case actionTypes.CREATE_NEW_ISSUE:
      return createNewIssue(state, action.title);

    default:
      return state;
  }

}
