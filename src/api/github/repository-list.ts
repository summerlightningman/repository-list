import client from './client.ts';
import {ApolloQueryResult, gql} from '@apollo/client';
import {GetRepositoryListQueryParams, GetRepositoryListResponse} from './types.ts';

export const get = async ({ name = '', count = 100 }: GetRepositoryListQueryParams): Promise<ApolloQueryResult<GetRepositoryListResponse>> => {
    return client.query({
        query: gql`{
            search(query: "name:${name}", type: REPOSITORY, first: ${count}) {
                edges {
                    node {
                        ... on Repository {
                            name
                            stargazerCount
                            pushedAt
                            url
                            owner {
                                login
                            }
                        }
                    }
                }
            }
        }`
    })
}