import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  const { name,id } = task;
  return (
    <div  className="container item-task">
      <h3>
        <li>
          {name} <Link to={`/tasks/${id}`} >&#8680;</Link>
        </li>
      </h3>
      <br />
    </div>
  );
}

export default TaskItem;