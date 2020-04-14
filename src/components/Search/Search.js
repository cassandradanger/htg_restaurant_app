import React, { Component } from 'react';
// import RestaurantList from '../RestaurantList/RestaurantList';
import './Search.css';
import debounce from "lodash.debounce";

class Search extends Component {
    state = {
    searchText: '',
    results: []
    }

    delayedCallback = debounce(this.ajaxCall, 400)

    ajaxCall(event) {
        const value = event.target.value;
    
        if (value === '') {
          this.setState({ results: [] })
        } else {
        // TO DO - Connect ajaxCall to API restaurant list based on tags
        //   API.getRestaurants(event.target.value)
        //     .then(res => {
        //       this.setState({ results: res.data })
        //     })
        //     .catch(err => console.log(err));
        }
      }

    onTextChange(event) {
        event.persist();
        this.delayedCallback(event);
    }

    render() {
        return (
        <div>
            <div>
            Search Restaurants 
            <input 
                id="search-text" 
                onChange={this.onTextChange.bind(this)}
            />
            <button>Go</button>
            </div>

            {/* <div>
            {this.state.results.length > 0 ? (
                <RestaurantList results={this.state.results} />
            ) : null}
            </div> */}
        </div>
        )
    }
}

export default Search;