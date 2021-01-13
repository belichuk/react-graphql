import React from 'react';

interface Row {
    "name": string,
    stargazerCount: number,
    forkCount: number
}

function GitHubRepoRow(props: Row) {
    const {name, stargazerCount, forkCount} = props;
    
    return (
        <tr>
            <td>{name}</td>
            <td>{stargazerCount} 🌟</td>
            <td>{forkCount} 🍴</td>
        </tr>
    );
}

export default GitHubRepoRow;
