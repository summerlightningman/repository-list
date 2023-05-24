import {ApolloClient, InMemoryCache} from "@apollo/client";
import TOKEN from "./token.ts";

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    }
})

export default client