import React from 'react';
import { Link } from 'react-router-dom';

const TaskItemShow = ( {task, onClick} ) => {
  return (
    <div className="card task-item-card">
      <Link to="/tasks" className="btn btn-info pull-xs-right">Back To Index</Link>
      <button
        className="btn btn-danger btn-sm pull-xs-right"
        onClick={onClick}
      >
        Delete Task
      </button>
      <div>

      <div className="container task-item">
        <br /> <br />
        <h3>{task.name}</h3>
        <h4>{task.description}</h4>
        <h4>Date: {task.date_formatted}</h4>
        <h4><Link to="/types">{task.type.name}</Link></h4>

        {task.notes ?
          <div>
            <h5>Info:</h5>
            <h6>{task.notes}</h6>
          </div>
          :
          <div><br/></div>
        }
      </div>
    </div>
  )
}

export default TaskItemShow;