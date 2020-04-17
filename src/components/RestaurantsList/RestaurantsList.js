import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';

class RestaurantList extends Component {

  componentDidMount () {
    this.props.dispatch({type: 'FETCH_RESTAURANTS'});
  }

  chooseRestaurant = (event, id) => {
    console.log(id);
    this.props.dispatch({type: 'FETCH_CHOSEN_RESTAURANT', payload: id});
    this.props.dispatch({ type: 'FETCH_MENUS', payload: id });
    this.props.history.push('/menuView')
  }
  render() {
    return (
      <div>
        <div>
          <p>
            Here is a list of restaraunts 
          </p>
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