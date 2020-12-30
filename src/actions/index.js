
import axios from 'axios';

const KEY ="337f9e15f531b8e09518f9dcffe668c2";

export const fetchdata=(city)=>async dispatch=>{
     const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}`)
    dispatch({
        type:'FETCH-DATA',
        payload:response.data
    });
    console.log(response)
};