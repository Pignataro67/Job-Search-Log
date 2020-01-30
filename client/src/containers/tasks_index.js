import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchTasks } from '../actions/index';
import TaskItem from '../components/task_item';

class TasksIndex extends Component {
  componentDidMount = () => {
    this.props.fetchTasks();
  }

  renderTasks = () => {
    return _.map(this.props.tasks, task => {
      return (
        <TaskItem
          key={task.id}
          task={task}
        />
      );
    });
  }

  render() {
  
    return (
      <div>
         <h3>Tasks</h3>
        <ol className="list-group">
          {this.renderTasks()}
        </ol>
      </div>	     
    );	    
  };	  
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.list
  };
}

export default connect(mapStateToProps, { fetchTasks })(TasksIndex);