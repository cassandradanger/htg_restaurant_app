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
        <div className="restaurantInfo">
          {this.props.state.restaurant[0] &&
          <>
            <p>Phone Number: {this.props.state.restaurant[0].phone}</p>
            <p>Delivery {this.props.state.restaurant[0].delivery ? "Available" : "Not Available"}</p>
            <p>Pickup {this.props.state.restaurant[0].pickUp ? "Available" : "Not Available"}</p>
          {this.props.state.restaurant[0].link ? <a href={this.props.state.restaurant[0].link}>our website</a> : <></> }
          </>
          }
        </div>
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
        {this.props.state.restaurant[0] && 
          <p className="welcomeNote">{this.props.state.restaurant[0].welcomeNote}</p>
        }
        <MenuView/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(RestaurantView);