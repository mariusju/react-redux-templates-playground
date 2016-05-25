const initialState = [
  {
    id: '1',
    title: 'first issue',
    upVotes: 3,
    downVotes: 1,
    comments: [
      {
        id: '1a2df3ads4e5f6c7',
        author: 'Marius',
        text: 'hello comments'
      }
    ]
  },
  {
    id: '2',
    title: 'second issue',
    upVotes: 11,
    downVotes: 3,
    comments: []
  },
];

export default initialState;
