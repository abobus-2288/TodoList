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
            <EditButton todo={props.todo}/>
            <CompleteButton todo={props.todo}/>
            <DeleteButton todo={props.todo}/>
        </div>
    )
}

export const EditButton = (props: ButtonProps) => {
    return (
        <button className={classes.btn}>
            Edit
        </button>
    )
}

export const CompleteButton = (props: ButtonProps) => {
    return (
        <button className={classes.btn}>
            Complete
        </button>
    )
}

export const DeleteButton = (props: ButtonProps) => {

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

    const onClick = () => {
        if (confirm("Are you sure you want to delete this todo?")) {
            deleteTodo();
            if (!DeleteTodoLoading) {
                document.location.reload();
            }
        }
    }

    return (
        <button onClick={onClick} className={classes.btn}>
            Delete
        </button>
    )
}

export const UnCompleteButton = (props: ButtonProps) => {
    return (
        <button className={classes.btn}>
            UnComplete
        </button>
    )
}
