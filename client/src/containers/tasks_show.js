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
    this.props.deleteTask(id, () => { 
        this.props.history.push('/');
      });
  }
  
  render() {
    const { task } = this.props;

    if (!task) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/tasks" className="btn btn-info">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Task
        </button>
        <div className="container">
        <br />
        <h3>{task.name}</h3>
        <h4>{task.description}</h4>
        <h4>Date: {task.date_formatted}</h4>
        <h4>Task ID: {task.type_id}</h4>
        {task.notes ?
          <div>
            <h4>Notes:</h4>
            <h5>{task.notes}</h5>
          </div>
          :
          <div></div>
        }
      </div>
    );
  }
}

function mapStateToProps({ tasks }, ownProps) {
  return { task: tasks[ownProps.match.params.id] };
}
  
export default connect(mapStateToProps, { fetchTask, deleteTask })(TasksShow);