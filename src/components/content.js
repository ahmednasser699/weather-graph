import React from 'react';
import {connect} from 'react-redux';
import {fetchdata} from '../actions';
import Chart from './chart';
import GoogleMap from './googlemap'; 

class Content extends React.Component{
    renderweather=(data)=>{
        const temp = data.list.map(item=> item.main.temp - 273);
        const pres = data.list.map(item=>item.main.pressure);
        const hum = data.list.map(item=>item.main.humidity);
        const {lon, lat} = data.city.coord;
       return(
      <tr key={data.city.id}>
          <td className="tddiv"><GoogleMap lat={lat} lon={lon}/></td>
          <Chart element={temp} color='red' unit="&#8451;"/>
          <Chart element={pres} color='blue' unit="kpa"/>
          <Chart element={hum} color='green' unit="%"/>
      </tr>
       )
    }
    render(){
      
    return(
   <table className="ui fixed single line table">
  <thead>
    <tr className='center aligned'>
      <th>city</th>
      <th>tempreture</th>
      <th>pressure</th>
      <th>humidity</th>
    </tr>
  </thead>
  <tbody>
    {this.props.weather.map(this.renderweather)}
    </tbody>
    </table>
    )
}}
const mapStateToProps=(state)=>{
     return{
         weather:state.weather
     }
}
export default connect(mapStateToProps, {fetchdata})(Content)