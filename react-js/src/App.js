import React from 'react';

import AddItem from './Component/AddItem/index'
import TodoItems from './Component/TodoItems/index'
import RecycleBen from './Component/TodoRecycleBen/index'

import './App.css';

function App() {
  return (
    <div className="App">
      Todo-List Project

      <AddItem />
      <TodoItems />
      <RecycleBen />
    </div>
  );
}

export default App;
