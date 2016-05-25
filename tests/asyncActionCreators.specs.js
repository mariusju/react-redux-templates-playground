import thunk from 'redux-thunk';
import * as actionTypes from './../src/actionTypes';
import * as actions from './../src/actions';
import configureStore from 'redux-mock-store';

describe('asyncActionCreators', () => {

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {};
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  describe('upvoteIssueAsync', () => {

    it('should dispatch REQUEST and SUCCESS actions', done => {
      store.dispatch(actions.upvoteIssueAsync(1))
        .then(() => {
          expect(store.getActions().length).toBe(2);
          expect(store.getActions()[0].type).toEqual(actionTypes.UPVOTE_ISSUE_REQUEST);
          expect(store.getActions()[1].type).toEqual(actionTypes.UPVOTE_ISSUE_SUCCESS);
        })
        .then(done);
    });

  });

  describe('downvoteIssueAsync', () => {
    it('should dispatch REQUEST and SUCCESS actions', done => {
      store.dispatch(actions.downvoteIssueAsync(1))
        .then(() => {
          expect(store.getActions().length).toBe(2);
          expect(store.getActions()[0].type).toEqual(actionTypes.DOWNVOTE_ISSUE_REQUEST);
          expect(store.getActions()[1].type).toEqual(actionTypes.DOWNVOTE_ISSUE_SUCCESS);
        })
        .then(done);
    });
  });

  describe('createNewIssueAsync', () => {
    it('should dispatch request and success actions', done => {

      const newIssueBody = {
        title: 'title'
      };

      const expectedActions = [
        {
          type: actionTypes.CREATE_NEW_ISSUE_REQUEST,
          title: 'title'
        },
        {
          type: actionTypes.CREATE_NEW_ISSUE_SUCCESS,
          body: newIssueBody
        }
      ];

      store.dispatch(actions.createNewIssueAsync('title'))
        .then(() => {
          const actualActions = store.getActions();

          expect(actualActions.map(x => x.type))
            .toEqual(expectedActions.map(x => x.type));

          expect(actualActions[actualActions.length - 1].body)
            .toEqual(jasmine.objectContaining(newIssueBody));
        })
        .then(done);
    });
  });

  describe('createNewCommentAsync', () => {
    it('should dispatch REQUEST and SUCCESS actions', done => {
      store.dispatch(actions.createNewCommentAsync({author: 'John', text: 'Hello world!'}))
        .then(() => {
          const actualActions = store.getActions();

          expect(actualActions.map(x => x.type))
            .toEqual(['CREATE_NEW_COMMENT_REQUEST', 'CREATE_NEW_COMMENT_SUCCESS']);
        })
        .then(done);
    });
  });

});
