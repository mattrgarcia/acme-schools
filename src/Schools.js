import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setSchools, setStudents } from './store';
import {Link} from 'react-router-dom';

const divStyle = {
  margin: '20px',
  display: 'flex',
  justifyContent: 'space-around'
};

class _Schools extends Component {
  componentDidMount(){
    this.props.loadData();
  }
  render(){
    const {schools,students} = this.props;

    return(
      <div style={divStyle}>
          {
            schools.map(school =>
              <div key={school.id}>
                <Link to ='/schools/{school.id}'>{school.name}</Link>
                <h5>Student Count {students.filter(student => student.schoolId === school.id).length}</h5>
                <label>
                Add Student:
                  <select defaultValue="add student">
                  <option>--Add Student--</option>
                    {
                      students.map(student=>
                        <option key={student.id} value={student.firstname}>
                          {student.firstName} {student.lastName}
                        </option>)
                    }
                  </select>
                </label>
              </div>
            )
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
