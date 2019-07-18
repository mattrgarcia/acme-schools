import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setSchools, setStudents, createStudent } from './store';

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
  constructor (){
    super()
    this.state= {
      firstName: '',
      lastName: '',
      email:'',
      gpa: ''
    }
  this.handleChange = this.handleChange.bind(this);
  this.onCreate = this.onCreate.bind(this);
  }
  handleChange(ev){
    this.setState({[ev.target.name]:ev.target.value});
  }
  onCreate(ev){
    ev.preventDefault()
    this.props.createStudent(this.state)
  }



  render() {
    const { schools } = this.props;
    const {handleChange, onCreate}= this;
    return (
      <form style = {formStyle} onSubmit={onCreate}>
      <label>
        First Name:
        <input type="text" name="firstName" onChange={handleChange}/>
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" onChange={handleChange}/>
      </label>
      <label>
        Email:
        <input type="text" name="email" onChange={handleChange}/>
      </label>
      <label>
        GPA:
        <input type="text" name="gpa" onChange={handleChange}/>
      </label>
      <label>
      Enroll at:
        <select>
          {
            schools.map(school=><option key={school.id} value={school.name}>{school.name}</option>)
          }
        </select>
      </label>
      <button type='submit'>Save</button>
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

const mapDispatchToProps = (dispatch, {history})=> {
  return{
    createStudent: (student)=> {
      return dispatch(createStudent(student, history))
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(_AddStudent);
