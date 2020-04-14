import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';

class AddMenu extends Component {

  render() {
    return(
      <div>
          <h1>Add a Menu</h1>
          <div>
              form goes here
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
});


export default connect(mapStateToProps)(AddMenu);
