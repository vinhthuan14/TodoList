import { useState, useEffect } from "react"
import  {TodoForm}  from "./TodoForm";
import { TodoItem } from "./TodoItem";
import List from '@mui/material/List';
export const TodoList = ({ todos, setTodos }) => {
    return (
        <div>
                {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className="todo_list"> */}
                {todos.map((todo, idx) => {
                    return (
                            <TodoItem
                            key={todo.id}
                            idx={idx}
                            setTodos={setTodos}
                            todos={todos}
                            todo={todo}
                            ></TodoItem>
                    )
                })}
                {/* </List> */}
        </div>

    )
}