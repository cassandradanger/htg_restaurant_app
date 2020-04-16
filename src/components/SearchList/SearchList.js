import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';

class SearchList extends Component {

  componentDidMount () {
    this.props.dispatch({type: 'FETCH_SEARCH_RESTAURANTS'});
  }

  chooseRestaurant = (event, restaurant) => {
    console.log(restaurant);
    this.props.dispatch({type: 'FETCH_CHOSEN_RESTAURANT', payload: restaurant});
    this.props.history.push('/restaurantView')
  }
  render() {
    return (
      <div>
        <div>
          <p>
            Search Results
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

export default connect(mapStateToProps)(SearchList);