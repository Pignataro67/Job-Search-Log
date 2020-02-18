import React from 'react';
import { Link } from 'react-router-dom';

const TaskItemShow = ( {task, onClick} ) => {
  return (
    <div className="card">
      <Link to="/tasks" className="btn btn-info pull-xs-right">Back To Index</Link>
      <button
        className="btn btn-danger pull-xs-right"
        onClick={onClick}
      >
        Delete Task
      </button>
      <div className="container">
        <h3>{task.name}</h3>
        <h4>{task.description}</h4>
        <h4>Date: {task.date_formatted}</h4>
        <h4>Task Type: {task.type.name}</h4>

        {task.notes ?
          <div>
            <h4>Notes:</h4>
            <h5>{task.notes}</h5>
          </div>
          :
          <div></div>
        }
      </div>
    </div>
  )
}

export default TaskItemShow;