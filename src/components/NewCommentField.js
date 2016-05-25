import React from 'react';
import template from './NewCommentField.rt';

class NewCommentField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commentText: '',
      author: '',
      isCommentFormVisible: false,
    };
  }

  showCommentForm() {
    this.setState({isCommentFormVisible: true});
  }

  handleCommentChange(e) {
    this.setState({commentText: e.target.value});
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  submitComment(e) {
    e.preventDefault();
    this.props.onCommentCreate({
      issueId: this.props.issueId,
      text: this.state.commentText,
      author: this.state.author,
    });
    this.setState({isCommentFormVisible: false});
  }

  render() {
    return template.call(this);
  }
}

NewCommentField.propTypes = {
  onCommentCreate: React.PropTypes.func.isRequired,
  issueId: React.PropTypes.any,
};

module.exports = NewCommentField;
