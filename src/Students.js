import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setSchools, setStudents } from './store';

class _Students extends React.Component {
  componentDidMount(){
    this.props.loadData();
  }
  render (){
    const { students } = this.props;
    return(
      <div>
        <ul>
          {
            students.map(student => <li key={student.id}>{student.firstName}</li>)
          }
        </ul>
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
