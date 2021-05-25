import React, { Component } from 'react'
import axios from 'axios';
import SearchBar from './SearchBar'
import Image_list from './Image_list'



export default class App extends Component {
  state = {
    persons: []
  }

  onsummit= async term=>{
    const response = await axios.get(`https://restcountries.eu/rest/v2/all`,{
      params:{ query:term },
    }
    );
    this.setState({persons:response.data.results});
    // console.log(response.data);
  }
  render() {
    return (
      <div>
        <SearchBar callBackFunction={this.onsummit} />
        {/* <Image_list persons={this.state.persons}/> */}
         <table border="1" align="center" cellPadding="50">
           <thead><tr>
             <th><h3>Name</h3></th>
             <th><h3>Capital</h3></th>
             <th><h3>Region</h3></th>
             <th><h3>Flag</h3></th>
             </tr>
           </thead>
           <tbody>
           {this.state.persons.map((e,i)=>(
         <>
         <tr key={i}>
           <td><h5>{e.name}</h5></td>
           <td><h5>{e.capital}</h5></td>
           <td><h5>{e.region}</h5></td>
           <td><img src={e.flag} height="70" width="100" /></td>
         </tr>
         </>))}
           </tbody>
         </table>
      
      </div>
    )
  }
}
