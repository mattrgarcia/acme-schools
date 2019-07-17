import React, {Component} from 'react';
import axios from 'axios';

class Students extends React.Component {
  constructor (){
    super()
    this.state = {
      students: []
    }
  }
  async componentDidMount (){
    try {
      const response = await axios.get('/api/students')
      this.setState({students: response.data})
    }
    catch(ex){
      console.log(ex)
    }
  }
  render (){
    const {students} = this.state;
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

export default Students;
