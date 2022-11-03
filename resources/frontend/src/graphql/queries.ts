import { gql } from '@apollo/client';

export const todosQuery = gql`
    query Todos{
        todos {
            data {
                id
                title
                is_completed
            }
        }
    }
`

export const todoQuery = gql`
    query todo($id:ID!) {
        todo(id:$id) {
            id
            title
            is_completed
            created_at
            updated_at
        }
    }
`
