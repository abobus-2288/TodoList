import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
    mutation addTodo($title: String!) {
        addTodo(title: $title) {
            id
            created_at
        }
    }
`

export const DELETE_TODO = gql`
    mutation removeTodo($id:ID!) {
        removeTodo(id:$id) {
            title
        }
    }
`
