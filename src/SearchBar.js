import React, { Component } from 'react'


export default class SearchBar extends Component {
    state= {term:''};
   
    handleChange=(event)=> {
       this.setState({term:event.target.value});
         
      }
      handleSubmmit=(event)=>{
        event.preventDefault();
        this.props.callBackFunction(this.state.term);
      }
    render() {
        return (
            <div className="container mt-5">
                <form onSubmit={this.handleSubmmit}>
  <div className="form-group">
                <input className="form-control" type="text" placeholder="input here…" onChange={this.handleChange}></input>
                </div>
                </form>
            </div>
        )
    }
}
