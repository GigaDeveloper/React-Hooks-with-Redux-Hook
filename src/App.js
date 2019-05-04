import React, { useState, useCallback } from 'react';
import TodoList from './components/TodoList';
import TodoAddNew from './components/TodoAddNew';
import { FaEdit } from 'react-icons/fa';

import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const [titleValue, setTitleValue] = useState('');
  const [form, setForm] = useState(false);
  const title = useSelector((state) => state.title);
  const dispatch = useDispatch();
  const updateTitle = useCallback(
    (title) => dispatch({
      type: 'UPDATE_TITLE',
      payload: title
    }),
    [dispatch]
  );

  const hendleSubmit = event => {
    console.log('hendleSubmit');
    event.preventDefault();
    if (titleValue.trim() === '') return;
    updateTitle(titleValue);
    setForm(false);
    setTitleValue('');
  }

  const updateTitleValue = event => {
    setTitleValue(event.target.value.trim());
  }

  const formHTML = (
    <form onSubmit={hendleSubmit}>
      <input
        type="text"
        name="todo"
        onChange={updateTitleValue}
        value={titleValue}
        placeholder="Edit title"
      />
      <button type="submit">Update</button>
    </form>);

  return (
    <div className="wrapper">
      <h3>{title} <button
                    className="edit-icon"
                    onClick={ () => { setForm(!form) } }
                  ><FaEdit /></button></h3>

      { form ? formHTML : null }
      
      <TodoAddNew />
      <TodoList />
    </div>
  );
}

export default App;
