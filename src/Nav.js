import React, {Component} from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import Schools from './Schools';
import Students from './Students';

class Nav extends React.Component {
  render(){
    return (
      <HashRouter>
      <div>
        <Link to="/schools">Schools</Link>
        <Link to="/students">Students</Link>
      </div>
      <Route path="/schools" Component = {Schools}/>
      <Route path="/students" Component = {Students}/>
    </HashRouter>
    )
  }
}

export default Nav;
