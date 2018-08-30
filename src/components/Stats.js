import React from 'react'
import PropTypes from 'prop-types'

class Stats extends React.Component {

  render(){
    const { tasks, viewAll, viewIsNotCompleted } = this.props
    return(
      <div className={tasks.length>0 ? 'row' : 'none'}>
       <span className="ml-4 mr-4"><strong className="text-secondary">Всего задач: {tasks.length}</strong></span>
      <button className='btn btn-secnodary btn-sm mr-1' onClick={viewAll}>Все</button>
      <button className='btn btn-secnodary btn-sm' onClick={viewIsNotCompleted}>Невыполненные</button>
      </div>
  )
 }
}

Stats.propTypes = {
  tasks: PropTypes.array.isRequired,
  viewAll: PropTypes.func.isRequired,
  viewIsNotCompleted: PropTypes.func.isRequired,
}


export default Stats
