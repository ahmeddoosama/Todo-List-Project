import React, {Component} from 'react';

import AddItem from './Component/AddItem/index'
import TodoItems from './Component/TodoItems/index'
import RecycleBen from './Component/TodoRecycleBen/index'

import './App.css';

class App extends Component {

  state = {
    items : [
      {id: 1, name: 'Ahmed Osama'},
      {id: 2, name: 'Mohamed Osama'},
      {id: 3, name: 'Ali Osama'}
    ]
  }


  deleteItem = (id) => {
    let allItems = this.state.items.filter(item => {
      return item.id != id
    })

    this.setState({items: allItems})
  }

  render() {
    return (
      <div className="App">
        Todo-List Project
  
        <AddItem />
        <TodoItems showItems={this.state.items} deleteItem={this.deleteItem} />
        <RecycleBen />
      </div>
    );
  }
}

export default App;
