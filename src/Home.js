import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setSchools, setStudents } from './store';

class _Home extends Component {
  componentDidMount(){
    this.props.loadData();
  }
  render(){
    const { schools, students }= this.props;
    return (
      <div>

      </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(_Home);
