import * as actionTypes from './actionTypes';
import Promise from 'bluebird';

const generateRandomId = () => Math.floor(Math.random() * 1000);

export const upvoteIssueRequest = () => ({
  type: actionTypes.UPVOTE_ISSUE_REQUEST,
});

export const upvoteIssueSuccess = issueId => ({
  type: actionTypes.UPVOTE_ISSUE_SUCCESS,
  issueId
});

export const upvoteIssueFailure = ex => ({
  type: actionTypes.UPVOTE_ISSUE_FAILURE,
  ex
});


const imitateNewIssueAJAX = title => new Promise(resolve =>
  setTimeout(() => resolve({
    title,
    id: generateRandomId(),
    upVotes: 0,
    downVotes: 0
  }), Math.random() * 1000)
);

const fakeAJAX = data => new Promise(resolve =>
  setTimeout(() => resolve(data), Math.random() * 1000)
);

export const upvoteIssueAsync = issueId =>
  dispatch => {
    dispatch(upvoteIssueRequest());
    return fakeAJAX(issueId)
      .then(res => dispatch(upvoteIssueSuccess(res)))
      .catch(err => dispatch(upvoteIssueFailure(err.code)));
  };

export const downvoteIssueRequest = () => ({
  type: actionTypes.DOWNVOTE_ISSUE_REQUEST
});

export const downvoteIssueSuccess = issueId => ({
  type: actionTypes.DOWNVOTE_ISSUE_SUCCESS,
  issueId
});

export const downvoteIssueFailure = ex => ({
  type: actionTypes.DOWNVOTE_ISSUE_FAILURE,
  ex
});

export const downvoteIssueAsync = issueId =>
  dispatch => {
    dispatch(downvoteIssueRequest());
    return fakeAJAX(issueId)
      .then(res => dispatch(downvoteIssueSuccess(res)))
      .catch(err => dispatch(downvoteIssueFailure(err.code)));
  };

export const createNewIssueRequest = title => ({
  type: actionTypes.CREATE_NEW_ISSUE_REQUEST,
  title,
});

export const createNewIssueSuccess = body => ({
  type: actionTypes.CREATE_NEW_ISSUE_SUCCESS,
  body
});

export const createNewIssueFailure = errorMessage => ({
  type: actionTypes.CREATE_NEW_ISSUE_FAILURE,
  errorMessage
});

export const createNewIssueAsync = title =>
  dispatch => {
    dispatch(createNewIssueRequest(title));
    return imitateNewIssueAJAX(title)
      .then(res => dispatch(createNewIssueSuccess(res)))
      .catch(err => dispatch(createNewIssueFailure(err.code)));
  };

export const imitateNewCommentAJAX = options =>
  new Promise(resolve =>
    setTimeout(() => resolve({
      id: generateRandomId(),
      ...options
    }), Math.random() * 1000)
  );

export const createNewCommentSuccess = data => ({
  type: actionTypes.CREATE_NEW_COMMENT_SUCCESS,
  ...data
});


export const createNewCommentRequest = options => ({
  type: actionTypes.CREATE_NEW_COMMENT_REQUEST,
  ...options
});

export const createNewCommentFailure = errorMessage => ({
  type: actionTypes.CREATE_NEW_COMMENT_FAILURE,
  errorMessage
});

export const createNewCommentAsync = options =>
  dispatch => {
    dispatch(createNewCommentRequest(options));  //TODO: make generic request creator
    return imitateNewCommentAJAX(options)
      .then(res => dispatch(createNewCommentSuccess(res)))
      .catch(err => dispatch(createNewCommentFailure(err.code)));
  };
