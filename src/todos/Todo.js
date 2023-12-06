import React from 'react';

const Todo = ({ id, text, removeTodo }) => {
    return (
        <li>
            {text}
            <button id={id} onClick={removeTodo}>X</button>
        </li>
    );

};

export default Todo;