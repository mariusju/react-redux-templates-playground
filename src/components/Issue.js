import React from 'react';

export default function Issue({
	id, title, upVotes, downVotes, onIssueUpVote, onIssueDownVote }){
	
	const rating = upVotes - downVotes;

	return (
		<div>
			{title}
			<button onClick={() => onIssueUpVote(id)}>
				{upVotes} Up
			</button>
			<button onClick={() => onIssueDownVote(id)}>
				{downVotes} Down
			</button>
			<span> {rating} </span>
		</div>
	)
}

