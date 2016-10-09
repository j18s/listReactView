import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import _ from 'underscore';
import List from './List'
class App extends Component {
  constructor() {
    super();
    this.state = {
      output:''
    };
    this.handleData=this.handleData.bind(this);
  }
  handleData(){
    var products=[];
        $.ajax({
          url: 'api/comments.json',
          datatype: 'json',
          success: function(data){
            products=data;      
            console.log(data);
            this.setState({output: products})                                     
          }.bind(this)
        });
  }
  render() {         
    return (
      <div>
        <button onClick={this.handleData}>GetData</button>
        <p >Ingredients</p>
        <List products={ this.state.output}/>
      </div>
    );
  }
}

export default App;
