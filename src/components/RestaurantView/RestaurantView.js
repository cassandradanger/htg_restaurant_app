import React, { Component } from 'react';
import { connect } from 'react-redux';

import './RestaurantView.css';

class RestaurantView extends Component {

  render() {
    return (
      <div>
        {this.props.state.restaurant[0] ? 
          <p>{this.props.state.restaurant[0].name}</p>
          :
          <p></p>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(RestaurantView);