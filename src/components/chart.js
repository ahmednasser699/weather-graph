import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'; 

const Chart =(props)=>{
    let average = _.round(_.sum(props.element)/props.element.length)
    return(
         <td>{<Sparklines data={props.element} margin={5}>
               <SparklinesLine color={props.color} />
               <SparklinesReferenceLine type="avg"/>
            </Sparklines>}
    <div className='center aligned' style={{fontSize:'20px', fontWeight:'bold', marginTop:"5px"}}>{average} {props.unit}</div>
       </td>
    )
}
export default Chart