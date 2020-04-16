import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import Geolocation from '../geolocation/geolocation'
// import {
//     GoogleMap,
//     LoadScript,
// } from 'google-map-react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component { 
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
    componentDidMount() {
      this.getLocations();
    }
    // Calls locations to be passed down to MapMarker component
    getLocations = () => {
        this.props.dispatch({ type: 'fetchRestaurants' })
        console.log(this.state);
        
    } // end getLocations
  
    render() {
        // const {userLocation } = this.state;  
        return(
        <Router>
            <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Geolocation/>
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
            {/* <div className="mapHomeComponent">
                <LoadScript
                    id="script-loader"
                    googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
                    >
                    <GoogleMap
                        className="mainMap"
                        mapContainerStyle={{
                            height: "89.5vh",
                            width: "auto"
                        }}
                        zoom={10}
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
                
                        {this.props.reduxStore.restaurantReducer.map(restaurant =>
                                <MapMarker key={restaurant.id} restaurant={restaurant} />
                        )}
                    </GoogleMap>
                 </LoadScript> 
            </div> */}
        </Router>
    )
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(MapContainer));