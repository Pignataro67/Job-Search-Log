import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTask, deleteTask } from '../actions';
import { Link } from 'react-router-dom';

class TasksShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params.id
    if (!this.props.task) {
        this.props.fetchTask(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params
    this.props.deleteTask(id);
  }
  
  render() {
    const { task } = this.props;

    if (!task) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary">Back To Index</Link>
        <button
          className="btn btn-dander pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Task
        </button>
        <h3>{task.name}</h3>
        <h4>{task.description}</h4>
      </div>
    );
  }
}

function mapStateToProps({ tasks }, ownProps) {
  return { task: tasks[ownProps.match.params.id] };
}
  
export default connect(mapStateToProps, { fetchTask, deleteTask })(TasksShow);