import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createTask } from '../actions';

class TasksNew extends Component {

  renderField(field){
    const { meta } = field;
    const className = `form-group ${meta.touched && meta.error ? 'has-danger': '' }`;
    return (
      <div className={className}>  
        <input
          placeholder={field.label}
          className="form-control"
          type="text"
          {...field.input}   
        />
        <div className="text-help">
          {meta.touched ? meta.error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createTask(values)
  }

  render() {
  
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Name"
          name="name"
          component={this.renderField}
        />
        <Field
          label="Description"
          name="description"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values){
const errors = {};

  if (!values.name) {
    errors.name = "Enter a name!";
  }
  if (!values.description) {
    errors.description = "Enter a description!";
  }

  return errors;
}

export default reduxForm({ validate, form: 'TasksNewForm' })(connect(null,{ createTask })(TasksNew));