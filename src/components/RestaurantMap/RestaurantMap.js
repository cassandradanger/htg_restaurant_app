import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import MapMarker from '../MapMarker/MapMarker';
import UserMapMarker from '../userMarker/userMarker'
import {
    GoogleMap,
    LoadScript,
} from '@react-google-maps/api';

class MapContainer extends Component { 
  state = { 
    userLocation: { latitude: 0, longitude: 0 },
     loading: true
    };
    componentDidMount() {
      this.getLocations();
      this.getGeoLocation();

    }
    // Calls locations to be passed down to MapMarker component
    getLocations = () => {
        return this.props.dispatch({ type: 'fetchRestaurants', payload: this.props.state.restaurantReducer })
    } // end getLocations
       //function get current location
       getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position.coords);
                    this.setState(prevState => ({
                        userLocation: {
                            ...prevState.userLocation,
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            accuracy: position.coords.accuracy
                        }
                    }))
                }
            )
        } else {
            console.log('error')
        }
    }
  
    render() {
      const {userLocation } = this.state;  
        return(
        // <Router>
            <div className="mapHomeComponent">
                <LoadScript
                    id="script-loader"
                    googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
                    >
                    <GoogleMap
                        className="mainMap"
                        mapContainerStyle={{
                            height: "20.5vh",
                            width: "auto"
                        }}
                        zoom={10}
                        center={{
                          lat: userLocation.latitude,
                          lng: userLocation.longitude,
                      }}
                        options={{
                            "mapTypeId": 'terrain',
                            "zoomControl": false,
                            "mapTypeControl": false,
                            "scaleControl": false,
                            "streetViewControl": false,
                            "rotateControl": false,
                            "fullscreenControl": false,
                        }}
                    >
                          {/* {this.props.state.restaurantReducer.map(restaurant =>
                                <MapMarker key={restaurant.id} restaurant={restaurant} />
                        )} */}
                    <UserMapMarker initialCenter={userLocation}/>
                    </GoogleMap>
                 </LoadScript> 
            </div>
        // </Router>
    )
  }
}
const mapStateToProps = (state) => ({
    state
});
export default withRouter(connect(mapStateToProps)(MapContainer));