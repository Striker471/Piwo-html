import React, { useState, useEffect } from "react";
import { addTodo, listenTodos, getTodos } from "../Firebase/DataService";
import { useUser } from "../Firebase/AuthService";

const Main = (props) => {
    const [newTodo, setNewTodo] = useState("");
    const [toDoList, setToDoList] = useState([]);
    const user = useUser();

    useEffect(() => {
        if (user) {
            const fetchTodos = async () => {
                const todos = await getTodos(user);
                setToDoList(todos);
            };
            fetchTodos();
        }
    }, [user]);
    
    useEffect(() => {
        if (user) {
            const unsubscribe = listenTodos((todos) => {
                setToDoList(todos);
            }, user);
    
            return () => unsubscribe();
        }
    }, [user]); 

    const handleNewTodo = (event) => {
        setNewTodo(event.target.value);
    }

    const handleAddNewToDo = async () => {
        if (newTodo !== '') {
            await addTodo(user, newTodo);
            setNewTodo("");
        }
    }

    const toDoListHTML = toDoList.map((todo) => 
        <p key={todo.id}>{todo.content}</p>
    );

    return (
        <div className="App">
            <input type="text" value={newTodo} onChange={handleNewTodo}></input>
            <button onClick={handleAddNewToDo}>Add to list</button>
            {toDoListHTML}
        </div>
    );
}

export default Main;
