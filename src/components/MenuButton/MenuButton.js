import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MenuButton.css';

class MenuButton extends Component {

  render() {
    return (
      <button onClick={(event) => this.props.chooseMenu(event, this.props.menu.id)} className="mainBtn">{this.props.menu.type}</button>
    );
  }
}
const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(MenuButton);
