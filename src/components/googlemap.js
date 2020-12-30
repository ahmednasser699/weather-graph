import React from 'react';
import {Map,  GoogleApiWrapper, Marker} from 'google-maps-react';



class GoogleMap extends React.Component{
  
    // componentDidMount() {
        
      
  
    //  new google.maps.Map(document.getElementById('map'),{
    //         zoom:12,
    //         center:{
    //             lat:this.props.lat,
    //             lng:this.props.lon
    //         }
    //     })
    // };
   
    render() {
        
        return (
           <Map google={this.props.google} zoom={11}  initialCenter={{
            lat: this.props.lat,
            lng: this.props.lon
            }} style={{ height: '150px', width: '200px', position: 'relative' }} containerStyle={{ position: "relative" }} >
                <Marker
                    title="Location"
                    id={1}
                    draggable={true}
                ></Marker>
                            
           </Map>
        )
    }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDylXaWcwor2waDca7aLXgXUcUMAxyddrQ'
})(GoogleMap)

const oldkey = "AIzaSyAq06l5RUVfib62IYRQacLc-KAy0XIWAVs"