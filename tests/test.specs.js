import * as actionTypes from './../src/actionTypes';
import Issue from './../src/components/Issue.js';
import * as reducers from './../src/reducers';
import initialState from './../src/reducers/initialState';
import * as actions from './../src/actions';
import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';

describe('imports', () => {

  it('should import actionTypes', () => {
    expect(actionTypes).toBeDefined();
  });

  it('should import component', () => {
    expect(Issue).toBeDefined();
  });

  it('should import reducers', () => {
    expect(reducers).toBeDefined();
  });

  it('should import initial state', () => {
    expect(initialState).toBeDefined();
  });

  it('should import actions', () => {
    expect(actions).toBeDefined();
  });

});

describe('issuesReducer', () => {

  it('should return initial state on creation', () => {
    const actual = reducers.issues(null, {});
    expect(actual).toBe(initialState);
  });

  describe('upvoteIssue', () => {
    it('success should increase the upVotes count by one', () => {
      const action = actions.upvoteIssueSuccess(initialState[0].id);
      const expected = initialState[0].upVotes + 1;
      const actual = reducers.issues(initialState, action);

      expect(actual[0].upVotes).toBe(expected);
    });

    //finish here - write async test;

    describe('upvoteIssueDelayed', () => {

      const middlewares = [ReduxThunk];
      const mockStore = configureStore(middlewares);
      const initialState = {};
      let store;

      beforeEach(() => {
        store = mockStore(initialState);
      });

      it('should dispatch an action', () => {
        store.dispatch({type: 'TEST_ACTION'});
        expect(store.getActions()).toEqual([{type: 'TEST_ACTION'}]);
      });

      it('should dispatch REQUEST and SUCCESS actions', done => {
        store.dispatch(actions.upvoteIssueDelayed(1))
          .then(() => {
            expect(store.getActions().length).toBe(2);
            expect(store.getActions()[0].type).toEqual(actionTypes.UPVOTE_ISSUE_REQUEST);
            expect(store.getActions()[1].type).toEqual(actionTypes.UPVOTE_ISSUE_SUCCESS);
          })
          .then(done);
      });

    });

  });

  describe('downvote', () => {
    it('should decrease the downvote count by one', () => {
      const action = actions.downvoteIssue(initialState[0].id);
      const expected = initialState[0].downVotes + 1;
      const actual = reducers.issues(initialState, action);

      expect(actual[0].downVotes).toBe(expected);
    });
  });

  describe('createNewIssue', () => {
    it('should create a new issue and add it to issues list', () => {
      const newIssueTitle = 'new issue';
      const action = actions.createNewIssue(newIssueTitle);
      const actual = reducers.issues(initialState, action);
      expect(actual[actual.length - 1].title).toBe(newIssueTitle);
    });
  });

});
