import * as actionTypes from './../actionTypes';

const initialState = 0;

const addPendingRequest = count => count + 1;

const removePendingRequest = count => count - 1;

export default function update(state, action) {
  state = state || initialState; //karma does not assign default params - needs reconfiguring

  switch (action.type) {

    case actionTypes.UPVOTE_ISSUE_REQUEST:
      return addPendingRequest(state);

    case actionTypes.DOWNVOTE_ISSUE_REQUEST:
      return addPendingRequest(state);

    case actionTypes.CREATE_NEW_ISSUE_REQUEST:
      return addPendingRequest(state);

    case actionTypes.UPVOTE_ISSUE_SUCCESS:
      return removePendingRequest(state);

    case actionTypes.DOWNVOTE_ISSUE_SUCCESS:
      return removePendingRequest(state);

    case actionTypes.CREATE_NEW_ISSUE_SUCCESS:
      return removePendingRequest(state);

    default:
      return state;
  }

}
