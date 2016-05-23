import React from 'react';
import template from './NewIssueForm.rt';

export default class NewIssueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newIssueTitle: ''};
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.createIssue = this.createIssue.bind(this);
  }

  handleTitleChange(e) {
    this.setState({newIssueTitle: e.target.value});
  }

  createIssue(e) {
    e.preventDefault();
    this.props.onIssueCreate(this.state.newIssueTitle.trim());
    this.setState({newIssueTitle: ''});
  }

  render() {
    return template.call(this);
  }
}
