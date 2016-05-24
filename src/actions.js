import * as actionTypes from './actionTypes';
import Promise from 'bluebird';

// export const upvoteIssue = issueId => ({
//   type: actionTypes.UPVOTE,
//   issueId,
// });

export const upvoteIssueRequest = () => ({
  type: actionTypes.UPVOTE_ISSUE_REQUEST,
});

export const upvoteIssueSuccess = issueId => ({
  type: actionTypes.UPVOTE_ISSUE_SUCCESS,
  issueId
});

const upvoteIssueFailure = ex => ({
  type: actionTypes.UPVOTE_ISSUE_FAILURE,
  ex
});

export const downvoteIssue = issueId => ({
  type: actionTypes.DOWNVOTE,
  issueId,
});

export const createNewIssue = title => ({
  type: actionTypes.CREATE_NEW_ISSUE,
  title,
});

const fakeAJAX = issueId => new Promise(resolve =>
  setTimeout(() => resolve('data ' + issueId), 100)
);

export function upvoteIssueDelayed(issueId) {
  return dispatch => {
    dispatch(upvoteIssueRequest());
    return fakeAJAX(issueId)
      .then(res => dispatch(upvoteIssueSuccess(res)))
      .catch(err => dispatch(upvoteIssueFailure(err.code)));
  };
}

