import React, {Component} from 'react';
import axios from 'axios';

class Schools extends React.Component {
  constructor (){
    super()
    this.state = {
      schools: []
    }
  }
  async componentDidMount (){
    try {
      const response = await axios.get('/api/schools')
      this.setState({schools: response.data})
    }
    catch(ex){
      console.log(ex)
    }
  }
  render(){
    const {schools} = this.state
    return(
      <div>
        <ul>
          {
            schools.map(school => <li key={school.id}>{school.name}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default Schools;
