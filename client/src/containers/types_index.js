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
    console.log(types[0])
    if (types.length !== 0) {
      return types[0].map(type => {
        return <TypeItem key={type.id} type={type} />
      })
    } else {
      return <div> ...Loading </div>
    }
  }

  render() {

    return (
      <div id="accordion">
        {this.renderTypes()}
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