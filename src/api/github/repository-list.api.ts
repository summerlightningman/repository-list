import client from "./client.ts";
import {ApolloQueryResult, gql} from "@apollo/client";
import {GetQueryParams, GetResponse} from "./types.ts";

export const get = async ({ name = "", count = 100 }: GetQueryParams): Promise<ApolloQueryResult<GetResponse>> => {
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
                        }
                    }
                }
            }
        }`
    })
}