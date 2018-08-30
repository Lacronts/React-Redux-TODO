import React from 'react'
import TodoList from '../containers/TodoList'
import CreateTask from '../containers/CreateTask'

export default class App extends React.Component {
  render(){
    return (
      <div className="container">
        <h3>React + Redux TODO</h3>
        <CreateTask />
        <TodoList />
      </div>
    )
  }
}
