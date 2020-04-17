import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';

import './RestaurantsList.css'

class RestaurantList extends Component {

  componentDidMount () {
    this.props.dispatch({type: 'FETCH_RESTAURANTS'});
  }

  chooseRestaurant = (event, restaurant) => {
    console.log(restaurant);
    this.props.dispatch({type: 'FETCH_CHOSEN_RESTAURANT', payload: restaurant});
    this.props.history.push('/restaurantView')
  }
  render() {
    return (
        <div>
      <p>
            Here is a list of restaraunts 
          </p>
   
          <div>
            {this.props.state.restaurant ?
              <div class="flex-container" onClick={this.chooseRestaurant}>{this.props.state.restaurant.map((restaurant) => 
                <div key={restaurant.id}>
                  <p>{restaurant.name}</p>
                  <img src={restaurant.picture} />
                </div>
              )}
              </div>
              :
              <p>no restaurants</p>
            }
          </div>
</div>
    )
  }
}


const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(RestaurantList);