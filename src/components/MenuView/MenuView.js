import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '../MenuItem';

class MenuView extends Component {
  render() {
    return (
      <div>
        <p>Menu Page</p>

        {this.props.state.menu && 
        this.props.state.menu.map(item => (
          <MenuItem key={`I${item.id}`} item={item}></MenuItem>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(MenuView);