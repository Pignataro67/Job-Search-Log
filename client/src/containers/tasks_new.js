import React, {Component} from 'react';
import { Field, reduxForm, change } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createTask } from '../actions';
import moment from 'moment';
import DatePicker from 'react-datepicker';

class TasksNew extends Component {

  renderTextField(field){
    const { input, label, meta } = field;
    const className = `form-group ${meta.touched && meta.error ? 'has-danger': '' }`;
    return (
      <div className={className}>  
        <input
          placeholder={label}
          className="form-control"
          type="text"
          {...input}   
        />
        <div className="text-help">
          {meta.touched ? meta.error : ''}
        </div>
      </div>
    )
  }

  renderTextAreaField(field){
    return (
      <div className="form-group">
        <textarea
          placeholder={field.label}
          className="form-control"
          type="textarea"
          rows="5"
          {...field.input}
        />
      </div>
    )
  }

  renderDatePicker({ input, label, meta: { touched, error } }) {
    return (
      <DatePicker
        {...input}
        className="form-control"
      />
    );
  }

  onSubmit(values) {
    this.props.createTask(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
  
    const { handleSubmit } = this.props;

    return (
      <div className="container">
        <div>
          <br />
          <h3>Add a New Task</h3>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Name"
          name="name"
          component={this.renderTextField}
        />
        <Field
          label="Date"
          name="date"
          dateFormat = 'MMM Do YY'
          component={this.renderDatePicker}
        />
        <Field
          label="Description"
          name="description"
          component={this.renderTextField}
        />
        <Field
          label="Optional Notes"
          name="notes"
          component="textAreaField"
        />
        <br />
        <br />
        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    </div>
    </div>
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