import React from 'react';
import Issue from './Issue';

export default function IssueList({ issues, onIssueUpVote, onIssueDownVote }) {
  return (
    <div>
      {issues.map(issue =>
        <Issue
          key={issue.id}
          onIssueUpVote={onIssueUpVote}
          onIssueDownVote={onIssueDownVote}
          {...issue}
        />
      )}
    </div>
  );
}
