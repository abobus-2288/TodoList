import * as React from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import App from "@/frontend/src/App";

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';

import { createClient } from 'graphql-ws';


const wsLink = new GraphQLWsLink(createClient({

    url: 'ws://localhost:8000/api/graphql',

}));

const httpLink = new HttpLink({

    uri: 'http://localhost:8000/api/graphql'

});

const splitLink = split(
    ({query}) => {

        const definition = getMainDefinition(query);

        return (

            definition.kind === 'OperationDefinition' &&

            definition.operation === 'subscription'

        );

    },

    wsLink,

    httpLink,
);


const apolloClient = new ApolloClient({

    link: splitLink,

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
