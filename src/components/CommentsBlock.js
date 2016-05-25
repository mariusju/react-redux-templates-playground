import React from 'react';
import template from './CommentsBlock.rt';

class CommentsBlock extends React.Component {
  render() {
    React.
    return template.call(this);
  }
}

CommentsBlock.propTypes = {
  comments: React.PropTypes.array.isRequired,
  onCommentCreate: React.PropTypes.func.isRequired,
  issueId: React.PropTypes.any.isRequired,
};

module.exports = CommentsBlock;
