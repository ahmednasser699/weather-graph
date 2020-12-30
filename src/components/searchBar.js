import React from 'react';
import {connect} from 'react-redux';
import {fetchdata} from '../actions'

class SearchBar extends React.Component{
    state={term:''}

    onFormSubmit=(e)=>{
        e.preventDefault();
       this.props.fetchdata(this.state.term);
       this.setState({term:''})
    }
   
    render(){
        return(
            <div className="ui segment"  style={{marginBottom:"15px"}}>



                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label className="ui header">Enter A City Name</label>
                   <div className="ui grid row">
                     
                            <div className="field ten wide column">
                                  
                            <input type="text" value={this.state.term} onChange={(e)=> this.setState({term:e.target.value})}/>
                        </div>
                        <span className="two wide coulmn" style={{marginTop:"15px"}}>
                            <button type="submit" className="ui submit button">Submit</button>
                        </span>
                   </div>
                </form>
            </div>
        )
    }
}
export default connect(null,{fetchdata} )(SearchBar)