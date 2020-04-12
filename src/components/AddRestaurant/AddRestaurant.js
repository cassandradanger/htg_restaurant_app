import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';

class AddRestaurant extends Component {

  

  render() {
    return(
      <div>
        <p>
          ADD A RESTAURANT!!!!!!
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
});


export default connect(mapStateToProps)(AddRestaurant);
