import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setSchools, setStudents } from './store';

class _Students extends React.Component {
  componentDidMount(){
    this.props.loadData();
  }
  render (){
    const { students, schools } = this.props;
    return(
      <div>
          {
            students.map(student =>
              <div key={student.id}>
              {student.firstName} {student.lastName}
                <h4>GPA: {student.gpa}</h4>
                <label>
                Enroll at:
                  <select>
                    {
                      schools.map(school=>
                        <option key={school.id} value={school.name}>
                          {school.name}
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

export default connect(mapStateToProps,mapDispatchToProps)(_Students);
