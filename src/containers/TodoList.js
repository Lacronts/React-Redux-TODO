import React from 'react'
import { connect } from 'react-redux'
import TodoItem from '../components/TodoItem'
import { deleteTask, toogleTask, editTask, saveTask, viewAll, viewIsNotCompleted } from '../actions/Actions'
import Stats from '../components/Stats'

class TodoList extends React.Component {

  render() {
    const {tasks, deleteTask, toogleTask, editTask, saveTask, view, viewAll, viewIsNotCompleted } = this.props
    return(
      <div>
      <div className={['row m-1 justify-content-center', (tasks.length===0) ? 'none' : 'alert-info'].join(' ')}>
          <h4>{(view.isNotCompleted===false) ? 'Все задачи' : 'Невыполненные'}</h4>
      </div>
      {tasks.map((task, index)=>{
        return(
          <TodoItem
            key={task.id}
            tasks={task}
            toogleTask={toogleTask}
            deleteTask={deleteTask}
            editTask={editTask}
            saveTask={saveTask}
            view = {view}
            />
        )
      }
    )}
    <div>
      <Stats tasks={tasks}
             viewAll={viewAll}
             viewIsNotCompleted={viewIsNotCompleted}
             deleteTask={deleteTask}/>
    </div>
     </div>
   )
  }
}

const mapStateToProps = store => {
  return {
    tasks: store.tasks,
    view: store.view
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: id => dispatch(deleteTask(id)),
    toogleTask: id => dispatch(toogleTask(id)),
    editTask: id => dispatch(editTask(id)),
    saveTask: (newTask, id) => dispatch(saveTask(newTask, id)),
    viewAll: () => dispatch(viewAll()),
    viewIsNotCompleted: () => dispatch(viewIsNotCompleted()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
