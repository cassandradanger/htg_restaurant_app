import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';

class SingleRestaurant extends Component {

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
        <Router>
        <div className="wrap">
               {this.props.state.restaurant ?
              <div>
                {this.props.state.restaurant.map((restaurant) => 
                <div className="card" onClick={this.chooseRestaurant} key={restaurant.id}>
                  <p>{restaurant.name}</p>
                {/* <p>{restaurant.picture}</p>
                <p>{restaurant.description}</p>
                <p>{restaurant.welcomeNote}</p> */}
                <p>{restaurant.hours}</p>
                  {/* <img src={restaurant.picture}/> */}
                </div>
              )}
              </div>
              :
              <p>no restaurants</p>
            }
</div>
</Router>
    )
  }
}


const mapStateToProps = state => ({
  state
});

export default withRouter(connect(mapStateToProps)(SingleRestaurant));