import * as reducers from './../src/reducers';
import * as actions from './../src/actions';


describe('issuesReducer', () => {

  const initialState = [
    {
      id: '1',
      title: 'first issue',
      upVotes: 3,
      downVotes: 1,
    },
    {
      id: '2',
      title: 'second issue',
      upVotes: 11,
      downVotes: 3,
    },
  ];

  it('should return same state with non-matching action', () => {
    const actual = reducers.issues(initialState, {});
    expect(actual).toBe(initialState);
  });

  describe('upvoteIssueSuccess', () => {
    it('should increase the upVotes count by one', () => {
      const action = actions.upvoteIssueSuccess(initialState[0].id);
      const expected = initialState[0].upVotes + 1;
      const actual = reducers.issues(initialState, action);

      expect(actual[0].upVotes).toBe(expected);
    });

  });

  describe('downvoteIssueSuccess', () => {
    it('should decrease the downvote count by one', () => {
      const action = actions.downvoteIssueSuccess(initialState[0].id);
      const expected = initialState[0].downVotes + 1;
      const actual = reducers.issues(initialState, action);

      expect(actual[0].downVotes).toBe(expected);
    });
  });

  describe('createNewIssueSuccess', () => {
    it('should add returned issue to the issue list', () => {
      const newIssue = {
        title: 'New issue',
        id: 99,
        upVotes: 0,
        downVotes: 0,
      };
      const action = actions.createNewIssueSuccess(newIssue);
      const actual = reducers.issues(initialState, action);
      expect(actual[actual.length - 1]).toBe(newIssue);
    });
  });

});
