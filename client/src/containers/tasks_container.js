import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTasks } from '../actions/index';
import TaskItem from '../components/task_item';

class TasksIndex extends Component {
  componentDidMount = () => {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div>
        Tasks Index
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTasks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksIndex);