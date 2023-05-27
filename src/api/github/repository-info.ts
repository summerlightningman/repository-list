import client from './client.ts'

import {ApolloQueryResult, gql} from '@apollo/client';
import {GetRepositoryInfoQueryParams, GetRepositoryInfoResponse} from "@api/github/types.ts";

export const get = async ({owner, name}: GetRepositoryInfoQueryParams): Promise<ApolloQueryResult<GetRepositoryInfoResponse>> => {
    return client.query({
        query: gql`query {
              repository(owner: "${owner}", name: "${name}") {
                owner {
                  login
                  avatarUrl
                  url
                }
                languages(first: 10) {
                  totalCount
                  nodes {
                    name
                  }
                }
                description
                stargazerCount
                pushedAt
              }
            }`
    })
}