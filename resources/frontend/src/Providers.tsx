import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'

import { AuthProvider } from 'react-auth-kit'

import { ApolloProvider } from '@apollo/client';

import App from "@/frontend/src/App";
import store from "@/frontend/src/app/store";

import apolloClient from "@/frontend/src/graphql/apolloClient";

const Providers = () => {
    return (
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                <AuthProvider authType={"cookie"} authName={"_auth"} cookieDomain={window.location.hostname}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </AuthProvider>
            </Provider>
        </ApolloProvider>
    )
}

export default Providers;
