import React , {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { setSchools, setStudents } from './store';
import AddStudent from './AddStudent'
import Schools from './Schools'
import Nav from './Nav'
import Students from './Students'
import Home from './Home'
import School from './School'

class _App extends Component {
  componentDidMount(){
    this.props.loadData();
  }
  render(){
    return (
  <HashRouter >
  <div>
    <Nav />
    <AddStudent/>
    <Route exact path="/" component={Home}/>
    <Route path="/schools" component={Schools}/>
    <Route path="schools/:id" component={School}/>
    <Route path="/students" component={Students}/>
  </div>
  </HashRouter>
  );
};
}

const mapStateToProps = ({schools, students})=> {
  return {
    schools,
    students
  };
};

const mapDispatchToProps = (dispatch)=> {
  return{
    loadData: ()=>{
      dispatch(setSchools());
      dispatch(setStudents());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(_App);
