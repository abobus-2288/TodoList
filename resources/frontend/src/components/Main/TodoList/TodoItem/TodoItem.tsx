import * as React from 'react';

import classes from '../TodoList.module.css';
import { Buttons } from "@/frontend/src/components/Main/TodoList/TodoItem/Buttons/Buttons";
import { Todo } from "@/frontend/src/graphql/types";

interface TodoItemProps {
    todo: Todo;
}

const TodoItem = (props: TodoItemProps) => {
    return (
        <li className={classes.tableRow}>
            <div className={`${classes.col} ${classes.col1}`}>{props.todo.id}</div>
            <div className={`${classes.col} ${classes.col2}`}>{props.todo.title}</div>
            <div className={`${classes.col} ${classes.col3}`}>{props.todo.completed ? 'Yes' : 'No'}</div>
            <div className={`${classes.col} ${classes.col4}`}>
                <Buttons todo={props.todo}/>
            </div>
        </li>
    )
}

export default TodoItem;
