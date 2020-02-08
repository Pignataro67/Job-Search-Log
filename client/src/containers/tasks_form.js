import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Calendar from 'react-calendar';
import { createTask, fetchTypes } from '../actions';
import Validate from 'react-validate-form';

class TasksForm extends Component {
  constructor(){
    super();

  this.handleOnSubmit = this.handleOnSubmit.bind(this)
  this.handleOnChange = this.handleOnChange.bind(this)
  this.state = {
    name: '',
    description: '',
    notes: '',
    date: newDate(),
    type_id: ''
  }
}

componentDidMount() {
  this.props.fetchTypes();
}

handleOnChange = event => {
  const { name, value } = event.target
  this.setState({
    [name]: value
  });
}

handleDateChange = date => {
  this.setState({ date })
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
              <Calendar
                onChange={this.handleDateChange}
                value={this.state.date}
              />
            </div>

            <div className="form-group">
              <select
                required
                type="select"
                name="type_id"
                className="custom-select"
                onChange={this.handleOnChange}>
                <option defaultValue>Select Type</option>
                {typesForSelect}
              </select>
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

            <button 
              type="submit" 
              className="btn btn-primary"
              disables={!this.state.formValid}
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