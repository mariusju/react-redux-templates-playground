import React from 'react';

export default class NewIssueForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newIssueTitle: ''}
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.createIssue = this.createIssue.bind(this);
    }

    handleTitleChange(e) {
    	this.setState({newIssueTitle: e.target.value})
    }

    createIssue(e){
    	e.preventDefault();
    	this.props.onIssueCreate(this.state.newIssueTitle.trim());
    	this.setState({newIssueTitle: ''});
    }

    render() {
        return (<form onSubmit={this.createIssue}>
        	<input
        		type="text"
        		value={this.state.newIssueTitle}
        		onChange={this.handleTitleChange}
        	/>
        	<button>Create</button>
    	</form>);
    }
}
