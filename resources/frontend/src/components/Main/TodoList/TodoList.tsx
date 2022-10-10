import * as React from 'react';
import { FormEvent } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form'

import { todosQuery } from "@/frontend/src/graphql/queries";
import { useQuery, useMutation } from "@apollo/client";

import classes from "./TodoList.module.css";
import TodoItem from "@/frontend/src/components/Main/TodoList/TodoItem/TodoItem";
import { Todo } from "@/frontend/src/graphql/types";
import { CREATE_TODO } from '@/frontend/src/graphql/mutations';

interface FormData {
    title?: string;
}

const TodoList = () => {

    const {loading, error: queryTodosError, data: queryTodosData, refetch: queryTodosRefetch} = useQuery(todosQuery);

    const {register, handleSubmit, formState: {errors: FormErrors}} = useForm();

    const [createTodo, {error: CreateTodoError, data: CreateTodoData}] = useMutation<{ todo: Todo },
        { title: string }>(CREATE_TODO, {
        variables: {
            title: !loading ? queryTodosData.title : ''
        }
    });

    if (!loading) {
        console.log(queryTodosData)
    }

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        createTodo({
            variables: {
                // @ts-ignore
                title: data.title,
                completed: false
            }
        });
        queryTodosRefetch();
    }


    return (
        <div className={classes.todoList}>
            <h1>Todo List</h1>
            {loading && <p>Loading...</p>}
            {queryTodosError && <p>Error : {queryTodosError.message}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.input}>
                    <input {...register("title", {
                        required: true
                    })} className={classes.input__text} type="text" placeholder="Title"/>
                    <input className={classes.input__submit} type="submit" value="Create todo"/>
                </div>
            </form>
            <ul className={classes.responsiveTable}>
                <li className={classes.tableHeader}>
                    <div className={`${classes.col} ${classes.col1}`}>Id</div>
                    <div className={`${classes.col} ${classes.col2}`}>Title</div>
                    <div className={`${classes.col} ${classes.col3}`}>Completed</div>
                </li>
                {!loading && queryTodosData.todos.data.map((todo: any) =>
                    <TodoItem key={todo.id} todo={todo}/>
                )}
            </ul>

        </div>
    )
}

export default TodoList;
