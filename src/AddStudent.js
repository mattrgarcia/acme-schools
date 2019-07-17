import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setSchools, setStudents } from './store';

const formStyle = {
  width: '100%',
  padding: '12px 20px',
  margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box'
}

class _AddStudent extends React.Component {
  componentDidMount(){
    this.props.loadData();
  }
   onSubmit(ev){
    ev.preventDefault();
  }
  render() {
    const { students,schools } = this.props;

    return (
      <form style = {formStyle}>
      <label>
        First Name:
        <input type="text" name="firstName"/>
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName"/>
      </label>
      <label>
        Email:
        <input type="text" name="email"/>
      </label>
      <label>
        GPA:
        <input type="text" name="gpa"/>
      </label>
      <label>
      Enroll at:
        <select>
          {
            schools.map(school=><option key={school.id} value={school.name}>{school.name}</option>)
          }
        </select>
      </label>
      <button>Save</button>
    </form>
    )
  }
};

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

export default connect(mapStateToProps,mapDispatchToProps)(_AddStudent);
