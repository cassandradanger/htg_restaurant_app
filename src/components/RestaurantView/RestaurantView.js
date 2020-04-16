import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuView from '../MenuView/MenuView'
import Map from '../RestaurantMap/RestaurantMap'
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

        <MenuView/>
        <Map/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(RestaurantView);