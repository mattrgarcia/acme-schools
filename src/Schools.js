import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setSchools, setStudents } from './store';
import {Link} from 'react-router-dom';

class _Schools extends Component {
  componentDidMount(){
    this.props.loadData();
  }
  render(){
    const {schools} = this.props;
    return(
      <div>
          {
            schools.map(school => <div key={school.id}><Link to ="/schools/:id">{school.name}</Link></div>)
          }
      </div>
    )
  }
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
export default connect(mapStateToProps, mapDispatchToProps)(_Schools);
