import React, {useEffect} from 'react';

import pusher from "@/frontend/src/api/pusher";

import { SubmitHandler, useForm } from 'react-hook-form';

import { CREATE_TODO } from '@/frontend/src/graphql/mutations';
import { todosQuery } from "@/frontend/src/graphql/queries";
import { useMutation, useQuery } from "@apollo/client";

import { Container, Table } from 'react-bootstrap';

import TodoItem from "@/frontend/src/components/Main/TodoList/TodoItem/TodoItem";
import Loader from "@/frontend/src/components/etc/Loader/Loader";

import classes from "./TodoList.module.css";

import { Todo } from "@/frontend/src/graphql/types";


interface FormData {
    title?: string;
}

const TodoList = () => {

    const {
        loading: todosLoading,
        error: queryTodosError,
        data: queryTodosData,
        refetch: queryTodosRefetch
    } = useQuery(todosQuery);

    const {register, handleSubmit, formState: {errors: FormErrors}} = useForm();

    const [createTodo, {error: CreateTodoError, data: CreateTodoData}] = useMutation<{ todo: Todo },
        { title: string }>(CREATE_TODO, {
        variables: {
            title: !todosLoading ? queryTodosData.title : ''
        }
    });

    const channel = pusher.subscribe('todos',);

    channel.bind('App\\Events\\TodoCreated', (data: any) => {
        queryTodosRefetch();
    });

    channel.bind('App\\Events\\TodoDeleted', (data: any) => {
        console.log(`Todo with id ${data.todo.id} was deleted`);
        // if (data.id > -1) {
        //     queryTodosData.splice(data.id, 1);
        // } @Todo сделать норм изменение данных при удалении
        queryTodosRefetch();
    });

    channel.bind('App\\Events\\TodoUpdated', (data: any) => {
        console.log(`Todo with id ${data.todo.id} was updated`);
        // if (data.type === 'is_completed' && !todosLoading && queryTodosData) {
        //     queryTodosData.todos.data = queryTodosData.todos.data.map((todo: Todo) => {
        //             if (todo.id == data.todo.id) {
        //                 console.log(todo);
        //                 todo.is_completed = data.todo.is_completed;
        //             }
        //         }
        //     );
        // } // @Todo сделать норм изменение данных при обновлении
        queryTodosRefetch();
    });

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
        <Container>
            <h1>Todo List</h1>
            {queryTodosError && <p>Error : {queryTodosError.message}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.input}>
                    <input {...register("title", {
                        required: true
                    })} className={classes.input__text} type="text" placeholder="Title"/>
                    <input className={classes.input__submit} type="submit" value="Create todo"/>
                </div>
            </form>
            <Table bordered={true} striped="columns">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {todosLoading && <Loader/>}
                {!todosLoading && queryTodosData.todos.data.map((todo: any) =>
                    <TodoItem key={todo.id} todo={todo}/>
                )}


                </tbody>
            </Table>


        </Container>
    )
}

export default TodoList;
