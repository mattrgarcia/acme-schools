import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setSchools, setStudents, setSchool } from './store';
import {Link} from 'react-router-dom';

class _School extends Component {

  render(){
    const {school ,students} = this.props;
    if(!school){
      return null;
    }
    return(
      <div>
          {
            <h2>{ school.name }</h2>
          }
      </div>
    )
  }
}

const mapStateToProps = ({schools, students}, {match})=> {
  const school = schools.find(school => school.id === match.params.id);
  return {
    school,
    students
  };
};

const mapDispatchToProps = (dispatch, {match})=> {
  return{

    }
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(_School);
