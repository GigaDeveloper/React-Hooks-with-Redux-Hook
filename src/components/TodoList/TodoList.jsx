import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const toggleTodo = useCallback(
    (todoId) => dispatch({
      type: 'TOGGLE_TODO',
      payload: todoId
    }),
    [dispatch]
  );
  const deleteTodo = useCallback(
    (todoId) => dispatch({
      type: 'DELETE_TODO',
      payload: todoId
    }),
    [dispatch]
  );

  return (
    <div className="TodoListWrapper">
      Test content Todo List
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed || false}
              onChange={() => { toggleTodo(todo.id) }}
            />
            <span
              className={todo.completed ? 'completed' : 'uncompleted' }
            >{todo.name}</span>
            <span
              className="delete-btn"
              onClick={() => deleteTodo(todo.id) }
            >x</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

