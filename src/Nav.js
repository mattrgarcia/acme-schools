import React, {Component} from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import Schools from './Schools';
import Students from './Students';

const divStyle = {
  margin: '20px',
  display: 'flex',
  justifyContent: 'space-between'
};

class Nav extends React.Component {
  render(){
    return (
      <div style={divStyle}>
        <Link to="/">Acme Schools</Link>
        <Link to="/schools">Schools</Link>
        <Link to="/students">Students</Link>
        <Link to="/schools/:id">Most Popular School</Link>
        <Link to="/schools/:id">Top School</Link>
      </div>
      )
  }
}

export default Nav;
