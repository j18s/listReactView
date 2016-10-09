//import React , { Component } from 'react';
var React = require('react');
class List extends React.Component {
    
  render() {  
      var elem = [];
      let ary = this.props.products;
      console.log('here: ' + this.props.products.length);
      for (var index = 0; index < ary.length ; index++)
        {
            elem.push(<ul key={index}>{ary[index].name}</ul>);
        }
      return (<div>
                {elem}
             </div>);
  }
}
export default List;
