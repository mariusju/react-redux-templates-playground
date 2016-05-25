import {findIndex, adjust, clone} from 'ramda';
import initialState from './issues.initial-state';
import * as actionTypes from './../actionTypes';

const upvote = issue => {
  issue.upVotes++;
  return issue;
};

//helper function
const downvote = issue => {
  issue.downVotes++;
  return issue;
};

//helper function
const upvoteIssue = (state, issueId) => {
  const index = findIndex(i => i.id === issueId, state);
  return adjust(upvote, index, state);
};

const downvoteIssue = (state, issueId) => {
  const index = findIndex(i => i.id === issueId, state);
  return adjust(downvote, index, state);
};

const createNewIssue = (state, newIssue) => [...state, newIssue];

const createNewComment = (state, {id, issueId, author, text}) => {
  let clonedState = clone(state);
  clonedState.forEach(issue => {
    if (issue.id === issueId) {
      issue.comments.push({id, author, text});
    }
  });
  return clonedState;
};

export default function update(state, action) {
  state = state || initialState; //karma does not assign default params - needs reconfiguring

  switch (action.type) {
    case actionTypes.UPVOTE_ISSUE_SUCCESS:
      return upvoteIssue(state, action.issueId);

    case actionTypes.DOWNVOTE_ISSUE_SUCCESS:
      return downvoteIssue(state, action.issueId);

    case actionTypes.CREATE_NEW_ISSUE_SUCCESS:
      return createNewIssue(state, action.body);

    case actionTypes.CREATE_NEW_COMMENT_SUCCESS:
      return createNewComment(state, action);

    default:
      return state;
  }

}
