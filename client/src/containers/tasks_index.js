import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/index';
import TaskItemIndex from '../components/task_item';

class TasksIndex extends Component {
  componentDidMount = () => {
    this.props.fetchTasks();
  }

  renderTasks = () => {
    return _.map(this.props.tasks, task => {
      return (
        <div className="container">

        <TaskItem
          key={task.id}
          task={task}
        />
      <br />
    </div>
      );
    });
  }

  render() {
  
    return (
      <div className="container">
        <h2>My Job Search Tasks</h2>
        <br />
        <ol className="list-group">
          {this.renderTasks()}
        </ol>
      </div>	     
    );	    
  };	  
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps, { fetchTasks })(TasksIndex);