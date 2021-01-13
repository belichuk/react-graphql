import {gql} from '@apollo/client';

export const SEARCH_GITHUB_REPOS = gql`
    query ($search_term: String!) {
        search(query: $search_term, type: REPOSITORY, first: 10) {
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

