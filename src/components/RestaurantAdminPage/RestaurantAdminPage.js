import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';

class RestaurantAdminPage extends Component {

  componentDidMount () {
    console.log('hello');
    this.props.dispatch({type: 'FETCH_MY_RESTAURANTS'});
  }

  chooseRestaurant = (event, restaurant) => {
    console.log(restaurant);
    this.props.dispatch({type: 'FETCH_CHOSEN_RESTAURANT', payload: restaurant});
    this.props.history.push('/restaurantView')
  }

  addNewRestaurant = () => {
    this.props.history.push('/addRestaurant')
  }

  render() {
    return(
      <div>
        <p>
          Welcome, { this.props.state.user.username }
        </p>
        <button onClick={this.addNewRestaurant}>Add New Restaurant</button>
        <div className="buttonWrapper">
          <h2>Your restaurants:</h2>
            {this.props.state.restaurant ?
              this.props.state.restaurant.map((restaurant) => {
                return <Button chooseRestaurant={this.chooseRestaurant} key={restaurant.id} restaurant={restaurant}></Button>
              })
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


export default connect(mapStateToProps)(RestaurantAdminPage);
