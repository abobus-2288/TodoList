import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

import {useQuery} from '@apollo/client';

import Loader from "@/frontend/src/components/etc/Loader/Loader";

import { todoQuery } from "@/frontend/src/graphql/queries";

import classes from './Todo.module.css';
import { Todo } from "@/frontend/src/graphql/types";


interface todoQueryData {
    todo: Todo
}

interface todoQueryVars {
    id: number
}

const Todo = () => {

    const params: any = useParams();
    const [todoId, setTodoId] = useState<number>(params.id);

    const {data: todo, loading, error, refetch} = useQuery<todoQueryData, todoQueryVars>(todoQuery,
        {
            variables: {
                id: todoId
            }
        });

    if (!loading) {
        console.log(todo);
    }

    return (
        <div className={classes.container}>
            {loading ? <Loader/> : null}
            {!loading && todo ?
                <>
                <h1>{todo.todo.title}</h1>
                <p>{todo.todo.is_completed ? "Is completed" : "Isn't completed"}</p>
                </>
                : null
            }
        </div>
    )
}

export default Todo;
