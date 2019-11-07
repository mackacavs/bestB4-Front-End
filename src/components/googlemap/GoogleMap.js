import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

const AnyReactComponent = ({ text }) => <div style={{ color: "red" }}>{text}</div>;

// class SimpleMap extends Component {
const GoogleMap = ({ googleMap, auth }) => {

  return (
    <div>
      <div style={{ height: '400px', width: '400px', margin: '0 auto' }}>

        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAGohMuwBDsj--Vq9WrLTWX_IrhtudEKPY' }}
          defaultCenter={{
            lat: 51.50986,
            lng: -0.118092
          }}
          defaultZoom={8}
        >
          <AnyReactComponent
            lat={googleMap.location.lat}
            lng={googleMap.location.lng}
            text={googleMap.location.description}
          />
        </GoogleMapReact>
      </div >

    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  googleMap: state.googleMap
})


export default connect(mapStateToProps, {})(GoogleMap)
