

const WeatherReducer=(state=[], action)=>{
    switch (action.type) {
        case "FETCH-DATA":
           return [action.payload, ...state]
           
    
        default:
           return state
    }
};
export default WeatherReducer