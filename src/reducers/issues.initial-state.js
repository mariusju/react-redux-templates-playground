const initialState = [
  {
    id: '1',
    title: 'Door handle of room 213 is broken',
    upVotes: 3,
    downVotes: 0,
    comments: [
      {
        id: '1a2df3ads4e5f6c7',
        author: 'Garen Coleman',
        text: 'Please dont close the door until its fixed'
      },
      {
        id: 'kj23kj2jk3432',
        author: 'Michael  Howard',
        text: 'It is really loud if we leave the door open'
      }
    ]
  },
  {
    id: '2',
    title: 'Running low on paper towels',
    upVotes: 0,
    downVotes: 3,
    comments: []
  },
];

export default initialState;
