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
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_RESTAURANTS'});
  }

  chooseRestaurant = (event, id) => {
    console.log(id);
    this.props.dispatch({type: 'FETCH_CHOSEN_RESTAURANT', payload: id});
    this.props.dispatch({ type: 'FETCH_MENUS', payload: id });
    this.props.history.push('/restaurantView')
  }
  render() {
    return (
      <div>
        <div>
          <div className="buttonWrapper">
            {this.props.state.restaurant ?
              this.props.state.restaurant.map((restaurant) => {
                return <Button chooseRestaurant={this.chooseRestaurant} key={restaurant.id} restaurant={restaurant}></Button>
              })
              :
              <p>no restaurants</p>
            }
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(RestaurantList);