import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from '../restaurant/restaurant'
import './RestaurantsList.css'

class RestaurantList extends Component {

  
  render() {
    return (
        <div className="Container">
            <center>
            <p>Here is a list of restaraunts </p>
            </center>
            <div className="flex-container">
            <Restaurant />
            </div>
      
    </div>
    )
  }
}


const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(RestaurantList);