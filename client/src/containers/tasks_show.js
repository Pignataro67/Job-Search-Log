import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTask } from '../actions';

class TasksShow extends Component {

  componentDidMount() {
    this.props.fetchTask(this.props.match.params.id);
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
  return { task: tasks[ownProps.match.params.id] };
}
  
export default connect(mapStateToProps, { fetchTask })(TasksShow);