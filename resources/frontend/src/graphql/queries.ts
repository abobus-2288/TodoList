import { gql } from '@apollo/client';

export const todosQuery = gql`
    query Todos{
        todos {
            data {
                id
                title
            }
        }
    }
`
