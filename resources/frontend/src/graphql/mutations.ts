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

export const REGISTER = gql`
    mutation register($name:String!,$password:String!,$email:String!) {
        register(name:$name,password:$password,email:$email) {
            message
            token
            user {
                id
            }
        }
    }
`

export const LOGIN = gql`
    mutation login($email:String!,$password:String!) {
        login(email:$email,password:$password) {
            message
            token
            user {
                id
                name
                email
                created_at
                updated_at
            }
        }
    }
`
