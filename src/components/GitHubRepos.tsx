import React, {useState, useEffect} from 'react';
import {Table}  from 'react-bootstrap';
import {useQuery} from '@apollo/client';
import {SEARCH_GITHUB_REPOS} from "./../queries/SearchGithubRepos";
import GitHubRepoRow from './GitHubRepoRow';
import Pagination from './Pagination';

interface Props {
    query: string;
}

function GitHubRepos(props: Props) {
    const {query} = props;
    const [afterCursor, setAfterCursor] = useState<String|null>(null);
    const [cursorQueue, setCursorQueue] = useState<Array<String>>([]);
    const [page, setPage] = useState<number>(1);
    const {data, loading, error} = useQuery(SEARCH_GITHUB_REPOS,
        {
            variables: {
                search_term: query,
                afterCursor: afterCursor
            }
        }
    );

    useEffect(() => {
        setAfterCursor(null);
        setCursorQueue([]);
        setPage(1);
    }, [query]);

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error while fetching repositories</p>;

    const {edges, repositoryCount, pageInfo} = data.search;

    const fetchNext = () => {
        setPage(oldPage => {return (oldPage ?? 1) + 1});
        setAfterCursor(pageInfo.endCursor);
        setCursorQueue(queue => (queue ?? []).concat(pageInfo.startCursor));
    }
    const fetchPrev = () => {
        const cursor = cursorQueue.length <= 1 ? null : cursorQueue.shift();

        setPage(oldPage => {return (oldPage ?? 1) - 1});
        setAfterCursor(cursor ?? null);
        setCursorQueue(queue => (queue ?? []).slice(-1));
    }

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

            <Pagination
                pageInfo={pageInfo}
                page={page}
                next={fetchNext}
                prev={fetchPrev} />

            <div>Count: {repositoryCount}</div>
        </div>
    );
}

export default GitHubRepos;
