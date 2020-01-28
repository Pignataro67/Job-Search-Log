import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchTasks } from '../actions/index';
import TaskItem from '../components/task_item';

class TasksContainer extends Component {
  componentDidMount = () => {
    this.props.fetchTasks();
  }

  renderTasks = () => {
    return _.map(this.props.tasks, task => {
      return (
        <li className="list-group-item" key={task.id}>
          {task.name}
        </li>
      );
    });
  }

  render() {
    console.log(this.props.tasks)
    return (
      <div>
         <h3>Tasks</h3>
        <ul className="list-group">
          {this.renderTasks()}
        </ul>
      </div>	     
    );	    
  };	  
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.list
  };
}

export default connect(mapStateToProps, { fetchTasks })(TasksContainer);