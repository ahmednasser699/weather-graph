
import {combineReducers} from 'redux';
import WeatherReducer from './fetch_weather';

export default combineReducers({
   weather:WeatherReducer
});