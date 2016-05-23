import * as actionTypes from './actionTypes';

export const upvoteIssue = issueId => ({
  type: actionTypes.UPVOTE,
  issueId,
});

export const downvoteIssue = issueId => ({
  type: actionTypes.DOWNVOTE,
  issueId,
});

export const createNewIssue = title => ({
  type: actionTypes.CREATE_NEW_ISSUE,
  title,
});

export function upvoteIssueDelayed(issueId) {
  return dispatch => {
    setTimeout(() => dispatch(upvoteIssue(issueId)), 1000);
  };
}

