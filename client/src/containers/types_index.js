import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTypes } from '../actions/index';
import TypeItem from '../components/type_item';

class TypesIndex extends Component {
  componentDidMount = () => {
    this.props.fetchTypes()
  }

  renderTypes = () => {
    const { types } = this.props
    return types.map(type => {
      <TypeItem key={type.id} type={type} />
    })
  }

  render() {

    return (
      <div>
        <ol>
          {this.renderTypes()}
        </ol>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    types: state.types
  };
}

export default connect(mapStateToProps, { fetchTypes })(TypesIndex);