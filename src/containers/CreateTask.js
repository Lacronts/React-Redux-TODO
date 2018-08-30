import React from 'react'
import { connect } from 'react-redux'
import { createTask } from '../actions/Actions'

class CreateTask extends React.Component {

handleCreate(event){
  event.preventDefault()
  const {createTask} = this.props
  const task = this.refs.task.value.trim()
  if (task){
    createTask(task)
    this.refs.task.value=''
  } else {
    alert('Поле не должно быть пустым')
  }
}

render(){
    return (
      <form onSubmit = {this.handleCreate.bind(this)}>
        <div className="row">
        <div className="col-10">
          <input className="form-control" type="text" ref="task" placeholder='Введите ваше дело'/>
        </div>
        <div className="col-2 text-left">
          <button className="btn btn-primary" type="submit">Создать</button>
        </div>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTask: task => dispatch(createTask(task)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateTask)
