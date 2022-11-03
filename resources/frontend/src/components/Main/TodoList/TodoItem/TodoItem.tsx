import * as React from 'react';
import { Link } from 'react-router-dom';

import { Buttons } from "@/frontend/src/components/Main/TodoList/TodoItem/Buttons/Buttons";

import classes from '../TodoList.module.css';

import { Todo } from "@/frontend/src/graphql/types";

interface TodoItemProps {
    todo: Todo;
}

const TodoItem = (props: TodoItemProps) => {
    return (
        <tr className={classes.tableRow}>
            <td>
                <Link to={`/todo/${props.todo.id}`}>{props.todo.id}</Link>
            </td>
            <td>
                <Link to={`/todo/${props.todo.id}`}>{props.todo.title}</Link>
            </td>
            <td>
                {props.todo.is_completed ? "Yes" : "No"}
            </td>
            <td>
                <Buttons todo={props.todo}/>
            </td>
        </tr>
    )
}

export default TodoItem;
