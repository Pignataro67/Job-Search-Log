import React, {Component} from 'react';

class TypeItem extends Component {
  constructor() {
    super();
    this.state = {
      showDescription: false
    }
  }
  
  onClick = () => {
    this.setState({showDescription: !this.state.showDescription});
  }
    
  render() {
    const { type } = this.props
    const showHide = {
      'display': this.state.showDescription ? 'block' : 'none'
    };
    return (
      <div className="container">
        <div className="row">
          <button className="btn btn-link" onClick={this.onClick}>{type.id}. {type.name}</button>
        </div>
        <div className="type-description" style={showHide}>
          {type.description}
        </div>
      </div>
    )
  }
}

export default TypeItem;