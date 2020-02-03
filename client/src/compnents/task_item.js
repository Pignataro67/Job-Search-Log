import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  const { name,id } = task;
  return (
    <div>
      <h3>{name}
        <Link to={`/tasks/${id}`} >&#8680;</Link>
      </h3>
    </div>
  )

}

export default TaskItem;