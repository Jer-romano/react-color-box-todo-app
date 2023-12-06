import {React, useState} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import {v4 as uuid } from 'uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const renderTodos = () => {
        return (
            <div>
                {todos.map(t => (<Todo id={t.id}
                                       key={t.id}
                                       text={t.text}
                                       removeTodo={removeTodo}
                                 />))}
            </div>
        );
    };

    const addTodo = (todo) => {
        let newTodo = { ...todo, id: uuid() };
        setTodos(todos => [...todos, newTodo]);
    };

    const removeTodo = (e) => {
        let id = e.target.id;
        const result = todos.filter(t => t.id !== id);
        setTodos(result);
    }

    return (
        <div className='TodoList'>
            <NewTodoForm addTodo={addTodo}/>
            {renderTodos()}
        </div>
    );

};

export default TodoList;