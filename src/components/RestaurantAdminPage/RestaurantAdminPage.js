import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import './RestaurantAdminPage.css';

class RestaurantAdminPage extends Component {

  componentDidMount () {
    console.log('hello');
    this.props.dispatch({type: 'FETCH_MY_RESTAURANTS'});
  }

  chooseRestaurant = (event, restaurant, admin) => {
    if(admin){
      console.log(restaurant);
      this.props.dispatch({type: 'FETCH_CHOSEN_RESTAURANT', payload: restaurant});
      this.props.history.push('/AddMenu')
    } else {
      console.log(restaurant);
      this.props.dispatch({type: 'FETCH_CHOSEN_RESTAURANT', payload: restaurant});
      this.props.history.push('/restaurantView')
    }
  }

  addNewRestaurant = () => {
    this.props.history.push('/addRestaurant')
  }

  render() {
    return(
      <div>
        <h1 className="welcomeUser">
          Hello, Restaurant Owner!
        </h1>
        <button className="addNewBtn" onClick={this.addNewRestaurant}>Add New Restaurant</button>
        <div className="buttonWrapper">
          <h2>Your restaurants:</h2>
            {this.props.state.restaurant ?
              this.props.state.restaurant.map((restaurant) => {
                return <Button className="restaurantChoice" admin="true" chooseRestaurant={this.chooseRestaurant} key={restaurant.id} restaurant={restaurant}></Button>
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
