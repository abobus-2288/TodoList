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
    mutation removeTodo($id: ID!) {
        removeTodo(id: $id) {
            message
            status
        }
    }
`

export const SET_TODO_IS_COMPLETED = gql`
    mutation setTodoIsCompleted($id:ID!,$isCompleted:Boolean!) {
        setTodoIsCompleted(id:$id, is_completed:$isCompleted) {
            message
            status
            todo {
                id
                title
                is_completed
            }
        }
    }
`
