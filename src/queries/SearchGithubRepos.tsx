import {gql} from '@apollo/client';

export const SEARCH_GITHUB_REPOS = gql`
    query ($search_term: String!, $afterCursor: String) {
        search(query: $search_term, type: REPOSITORY, first: 5, after: $afterCursor) {
            repositoryCount
            pageInfo {
              startCursor
              hasNextPage
              endCursor
              hasPreviousPage
            }
            edges {
                node {
                    ... on Repository {
                        name
                        stargazerCount
                        forkCount
                    }
                }
            }
        }
    }
`;
