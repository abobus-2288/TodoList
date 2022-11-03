import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from "@/frontend/src/App";


const apolloClient = new ApolloClient({

    uri: 'http://localhost:8000/api/graphql',

    cache: new InMemoryCache(),

});

const Providers = () => {
    return (
        <ApolloProvider client={apolloClient}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default Providers;
