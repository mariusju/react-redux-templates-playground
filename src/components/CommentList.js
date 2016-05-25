import React from 'react';
import template from './Commentlist.rt';

class CommentList extends React.Component {
  render() {
    return template.call(this);
  }
}

CommentList.propTypes = {
  comments: React.PropTypes.array.isRequired,
  
};

module.exports = CommentList;
