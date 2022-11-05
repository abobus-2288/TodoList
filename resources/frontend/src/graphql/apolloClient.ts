import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import Cookies from 'js-cookie';


const PUSHER_CLUSTER = 'eu';
const PUSHER_API_KEY = 'ff7a8203cc1de341f2fc';
const API_LOCATION = 'http://localhost:8000'

const token = Cookies.get('_auth');
console.log(token);

const httpLink = new HttpLink({

    uri: `${API_LOCATION}/api/graphql`,

    headers: {
        authToken: `Bearer ${localStorage.getItem('token')}`
    }

});


const wsLink = new GraphQLWsLink(createClient({

    url: 'ws://localhost:4000/subscriptions',

    connectionParams : {
        authToken: localStorage.getItem('token')
    }

}));

const splitLink = split(

    ({ query }) => {

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

export default apolloClient;
