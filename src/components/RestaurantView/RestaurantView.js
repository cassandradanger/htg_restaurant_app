import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuView from '../MenuView/MenuView'
import Map from '../RestaurantMap/RestaurantMap'
import './RestaurantView.css';

class RestaurantView extends Component {

  render() {
    return (
      <div>
        <Map/>
        <header className="menuHeader">
          {this.props.state.restaurant[0] ? 
          <>
            <h1>{this.props.state.restaurant[0].name}</h1>
            <img alt="fork and spoon logo" src={require("../../assets/images/restaurant_darkblue.png")}/>
          </>
            :
            <p></p>
          }
        </header>
        <MenuView/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(RestaurantView);