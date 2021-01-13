import React, {useState, useEffect} from 'react';
import {Table}  from 'react-bootstrap';
import {useQuery} from '@apollo/client';
import {SEARCH_GITHUB_REPOS} from "./../queries/SearchGithubRepos";
import GitHubRepoRow from './GitHubRepoRow';

interface Props {
    query: string;
}

function GitHubRepos(props: Props) {
    const {query} = props;
    const {data, loading, error} = useQuery(SEARCH_GITHUB_REPOS,
        {
            variables: {
                search_term: query
            }
        }
    );

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error while fetching repositories</p>;

    const {edges, repositoryCount, pageInfo} = data.search;

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Repo Name</th>
                        <th>Stars</th>
                        <th>Forks</th>
                    </tr>
                </thead>
                <tbody>
                    {edges.map((r: any, i: number) => <GitHubRepoRow key={i} {...r.node} />)}
                </tbody>                    
            </Table>

            <div>Count: {repositoryCount}</div>
        </div>
    );
}

export default GitHubRepos;
