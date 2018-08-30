import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component{

  handleSave(event){
    event.preventDefault()
    const newTask = this.refs.newTask.value
    const id = this.refs.id.value
    this.props.saveTask(newTask, id)
  }

  renderTaskSection(){
    const { tasks, view } = this.props
    if (tasks.isEditing){
        return(
          <form onSubmit = {this.handleSave.bind(this)}>
            <div className="row">
              <div className="col-10">
                <input type="hidden" ref="id" value={this.props.tasks.id}/>
                <input type="text" className="form-control" ref="newTask" defaultValue={tasks.task}/>
              </div>
              <div className="col-2 text-right">
                <button className="btn btn-success btn-sm" type="submit">Сохранить</button>
              </div>
            </div>
          </form>
          )
    }else {
      return(
        <React.Fragment>
          <span className={(view.isNotCompleted && tasks.isDone) ? 'none': ''}>
            <input type="checkbox" id={tasks.id} checked={tasks.isDone} onChange={this.props.toogleTask.bind(this, this.props.tasks.id)}/>
            <label htmlFor={tasks.id}></label>
          </span>
          <span>
            {tasks.task}
          </span>
        </React.Fragment>
      )
    }
  }

  renderActionSection(){
    const { tasks, view } = this.props
    if (tasks.isEditing){
      return(
      <div className={[(view.isNotCompleted && tasks.isDone) ? 'none': ''].join(' ')}>
          <button className="btn btn-danger btn-sm" onClick={this.props.deleteTask.bind(this, this.props.tasks.id)}>Удалить</button>
      </div>
      )
    }else{
      return(
      <div className={[(view.isNotCompleted && tasks.isDone) ? 'none': ''].join(' ')}>
          <button className="btn btn-warning m-1 btn-sm" onClick={this.props.editTask.bind(this, this.props.tasks.id)}>Изменить</button>
          <button className="btn btn-danger btn-sm" onClick={this.props.deleteTask.bind(this, this.props.tasks.id)}>Удалить</button>
      </div>
      )
    }
  }

  render(){
    const { tasks, view } = this.props
    return(
      <div className={["row m-1 align-items-center",(tasks.isDone) ? 'alert-success' : 'alert-danger',(view.isNotCompleted && tasks.isDone) ? 'none': ''].join(' ')}>
        <div className="col-9 text-left">
          { this.renderTaskSection() }
        </div>
        <div className="col-3 text-right">
          { this.renderActionSection() }
        </div>
      </div>
    )
  }
}

TodoItem.propTypes = {
  tasks: PropTypes.object.isRequired,
  saveTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  toogleTask: PropTypes.func.isRequired,
}

export default TodoItem
