import React from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { Spin } from "antd";

const MapContainer = props => {
  return (
    <Map
      google={props.google}
      zoom={18}
      initialCenter={{
        lat: -17.775495,
        lng: -63.183438
      }}
      onClick={(t, map, c) => props.addMarker(c.latLng)}
      style={{ height: "300px", width: "95%" }}
    >
      {props.posx != null ? (
        <Marker position={{ lat: props.posx, lng: props.posy }} />
      ) : (
        ""
      )}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyC9OzeJrXWwFqyo5lBqkfPLuk4HO3EvOKI",
  LoadingContainer: Spin
})(MapContainer);
