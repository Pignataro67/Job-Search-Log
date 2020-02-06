import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createTask, fetchTypes } from '../actions';


class TasksForm extends Component {
  constructor(){
    super();

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.state = {
      name: '',
      description: '',
      notes: '',
      date: '',
      type_id: ''
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.createTask( this.state, () => {
      this.props.history.push('/');
    });
    this.setState({
      name: '',
      description: '',
      notes: '',
      date: '',
      type_id: ''
    })
  }
  render() {
    return (

      <div className="container">
        <br />
        <h3>Add a new task</h3>
          <form className="form-group" onSubmit={this.handleOnSubmit}>

            <div className="form-group">
              <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={this.handleOnChange}
                  value={ this.state.name }
                  required
              />
            </div>

            <div className="form-group">
              <input
                  className="form-control"
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={this.handleOnChange}
                  value={ this.state.description }
                  required
              />
            </div>

            <div className="form-group">
              <input
                  className="form-control"
                  type="textarea"
                  name="notes"
                  placeholder="Optional Notes"
                  onChange={this.handleOnChange}
                  value={ this.state.notes }
              />
            </div>

            <button type="submit" className="btn btn-primary">Save</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>

          </form>
      </div>
    );
  }

}

export default TasksForm;