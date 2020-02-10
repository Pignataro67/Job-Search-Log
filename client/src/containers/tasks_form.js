import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Calendar from 'react-calendar';
import { createTask, fetchTypes } from '../actions';
import {formErrors} from '../components/form_errors';

class TasksForm extends Component {
  constructor(){
    super();

  this.handleOnSubmit = this.handleOnSubmit.bind(this)
  this.handleOnChange = this.handleOnChange.bind(this)
  this.validate = this.validate.bind(this)

  this.state = {
    task: {
      name: '',
      description: '',
      notes: '',
      date: newDate(),
      type_id: ''
    },
    formErrors: {
      name: true,
      description: true,
      type_id: true
    }
  }
}

componentDidMount() {
  this.props.fetchTypes();
}

handleOnChange = event => {
  console.log(event.target.value)
  const { name, value } = event.target
  this.setState({
    task: {
    ...this.state.task,
    [name]: value,
    }
  });
}

handleDateChange = date => {
  console.log(date)
  this.setState({
      task: {
      ...this.state.task,
      date: date,
    }
  });
}

validate = (values) => {
const errors = {}
return errors;
}

handleOnSubmit = (e) => {
  e.preventDefault();
  this.props.createTask( this.state, () => {
    this.props.history.push('/tasks');
  });
  this.setState({
    task: {
      name: '',
      description: '',
      notes: '',
      date: '',
      type_id: ''
    },
    formErrors: {
      name: true,
      description: true,
      type_id: true
    }
  });
}

  render() {
    const { types } = this.props;
    let typesForSelect;
    if (types.length !== 0){
      typesForSelect = types[0].map((type, index) => {
        return <option key={index} value={type.id}>{type.name}</option>
      });
    }
    
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
                  onBlur={this.validate}
                  value={ this.state.task.name }
              />
            </div>
            <div className="form-errors">
              {formErrors}
            </div>

            <div className="form-group">
              <input
                  className="form-control"
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={this.handleOnChange}
                  onBlur={this.validate}
                  value={ this.state.task.description }
              />
            </div>
            <div className="form-errors">
              {formErrors}
            </div>

            <div className="form-group">
              <Calendar
                onChange={this.handleDateChange}
                value={this.state.task.date}
                className="form-control"
                calendarType="US"
              />
            </div>

            <div className="form-group">
              <select
                required
                type="select"
                name="type_id"
                className="form-control"
                onChange={this.handleOnChange}>
                <option defaultValue>Select Type.....</option>
                {typesForSelect}
              </select>
            </div>

            <div className="form-errors">
              {formErrors}
            </div>
            <div className="form-group">
              <textarea
                  className="form-control"
                  name="notes"
                  placeholder="Optional Notes"
                  onChange={this.handleOnChange}
                  value={ this.state.task.notes }
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              >Save
            </button>
            <Link to="/" className="btn btn-danger">Cancel</Link>

          </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    types: state.types
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchTypes, createTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksForm);