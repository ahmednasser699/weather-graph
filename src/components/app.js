import React from 'react';
import SearchBar from './searchBar';
import Content from './content';

const App =()=>{
    return(
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar/>
            <Content />
        </div>
    )
}
export default App;