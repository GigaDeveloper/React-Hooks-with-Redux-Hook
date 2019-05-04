import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';

const TodoAddNew = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const addTodo = useCallback(
    (todo) => dispatch({
      type: 'ADD_TODO',
      payload: todo
    }),
    [dispatch]
  );

  const hendleSubmit = event => {
    event.preventDefault();
    if (todo.trim() === '') return;
    addTodo({
      id: uuid(),
      name: todo,
      complete: false
    });
    setTodo('');
  }

  const updateTodo = event => {
    const newValue = event.target.value;
    setTodo(newValue);    
  }

  return (
    <div className="TodoAddNewWrapper">
      <form onSubmit={hendleSubmit}>
        <input
          type="text"
          name="todo"
          onChange={updateTodo}
          value={todo}
          placeholder="Add todo"
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
export default TodoAddNew;
