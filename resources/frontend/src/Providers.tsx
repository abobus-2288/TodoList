import * as React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from "@/frontend/src/App";

const apolloClient = new ApolloClient({

    uri: 'http://localhost:8000/api/graphql',

    cache: new InMemoryCache(),

});

const Providers = () => {
    return (
        <ApolloProvider client={apolloClient}>
            <App/>
        </ApolloProvider>
    )
}

export default Providers;
