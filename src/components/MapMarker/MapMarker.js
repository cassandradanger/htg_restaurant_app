import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    Marker, InfoWindow
} from '@react-google-maps/api';

class MapMarker extends Component {

    state = {
        window: false
    }

    infoWindow = () => {
        this.setState({
            window: !this.state.window
        })
        console.log('Click Pin')
    }

    handleInfoPush = (id) => {
        console.log('Push to restaurant details', id);
        this.props.history.push(`/${id}`)
    }

   render () {
       console.log(this.props.restaurant);
       
       let restaurant = '/'
       return (
           <div className="mapMarker">
               <Marker
                    position={{
                        lat: Number(this.props.restaurant.latitude),
                        lng: Number(this.props.restaurant.longitude)
                    }}
                    onClick={()=>
                        this.infoWindow()
                    }
               />
                {this.state.window ?
                    <InfoWindow key={this.props.restaurant.id}
                        position={{
                            lat: Number(this.props.restaurant.latitude),
                            lng: Number(this.props.restaurant.longitude)
                        }}
                        onCloseClick={{
                        }}
                        icon={{
                            fillOpacity: 1.0,
                            strokeWeight: 0,
                            scale: 1.25,
                        }}
                    >
                        <div
                            className="infoWindow"
                            style={{
                                background: `white`,
                                padding: 0,
                                margin: 0,
                                textAlign: "left"
                            }}>
                            <h2>{this.props.restaurant.name}</h2>
                            <Link to={restaurant + this.props.restaurant.id}><h3>Click here for more info</h3></Link>

                        </div>
                    </InfoWindow>
                    :
                    ""
                }
           </div>
       )
   }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(MapMarker);