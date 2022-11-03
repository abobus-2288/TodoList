import * as React from 'react';

import classes from './../../TodoList.module.css';
import { Todo } from "@/frontend/src/graphql/types";

import { useMutation } from "@apollo/client";
import { DELETE_TODO } from '@/frontend/src/graphql/mutations';

interface ButtonProps {
    todo: Todo;
}

export const Buttons = (props: ButtonProps) => {
    return (
        <div>
            {/*<EditButton todo={props.todo}/>*/}
            <CompleteButton todo={props.todo}/>
            <DeleteButton todo={props.todo}/>
        </div>
    )
}

const EditButton = (props: ButtonProps) => {
    return (
        <button className={classes.btn}>
            Edit
        </button>
    )
}

const CompleteButton = (props: ButtonProps) => {

    const [completeTodo, {}] = useMutation<{ message: string, status: number, todo: Todo },
        { id: number, is_completed: boolean }>(DELETE_TODO, {
        variables: {
            id: props.todo.id,
            is_completed: !props.todo.is_completed
        }
    });

    return (
        <button className={classes.btn}>
            Complete
        </button>
    )
}

const DeleteButton = (props: ButtonProps) => {

    const [deleteTodo, {
        error: DeleteTodoError,
        data: DeleteTodoData,
        loading: DeleteTodoLoading
    }] = useMutation<{ todo: Todo },
        { id: number }>(DELETE_TODO, {
        variables: {
            id: props.todo.id
        }
    });

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        alert(props.todo.id);
        deleteTodo().then(
            (res) => {
                console.log(res);
            }
        );
    }

    return (
        <button onClick={onClick} className={classes.btn}>
            Delete
        </button>
    )
}

const UnCompleteButton = (props: ButtonProps) => {
    return (
        <button className={classes.btn}>
            UnComplete
        </button>
    )
}
