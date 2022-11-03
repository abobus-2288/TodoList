import * as React from 'react';

import {Routes, Route} from 'react-router-dom';

import TodoList from "@/frontend/src/components/Main/TodoList/TodoList";
import Header from "@/frontend/src/components/Header/Header";
import Todo from "@/frontend/src/components/Main/Todo/Todo";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/todos" element={<TodoList/>}/>
                <Route path="todo/:id" element={<Todo/>}/>
            </Routes>
        </>
    )
}

export default App;
