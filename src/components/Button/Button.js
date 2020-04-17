import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Button.css';

class Button extends Component {
  
  render() {
    return (
      <button onClick={(event) => this.props.chooseRestaurant(event, this.props.restaurant.id, this.props.admin)} className="mainBtn">{this.props.restaurant.name} {this.props.restaurant.id}</button>
    );
  }
}
const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(Button);
