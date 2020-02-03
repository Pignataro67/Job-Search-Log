import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSelectedTask } from '../actions';

class TasksShow extends Component {

  componentDidMount() {
    this.props.fetchSelectedTask(this.props.match);
  }

  render() {
    const { task } = this.props;

    if (!task) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{task.name}</h3>
        <h4>{task.description}</h4>
      </div>
    );
  }
}

function mapStateToProps({ tasks }, ownProps) {
  return { selectedTask: tasks[ownProps.match.params.id] };
}
  
export default connect(mapStateToProps, { fetchSelectedTask })(TasksShow);