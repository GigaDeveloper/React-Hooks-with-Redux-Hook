import uuid from 'uuid/v4';


const initialState = {
  title: 'This is the title',
  todos: [
    {
      id: uuid(),
      name: 'To do something',
      completed: false
    },
    {
      id: uuid(),
      name: 'Another to do',
      completed: true
    },
    {
      id: uuid(),
      name: 'One more to do',
      completed: true
    }
  ]
};

export default initialState;
