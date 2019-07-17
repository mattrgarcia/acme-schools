import React, {Component} from 'react';

class AddStudent extends React.Component {
  constructor (){
    super()
    this.state = {
      name: ''
    }
    const onSubmit = this.onSubmit.bind(this);
  }
   onSubmit(ev){
    ev.preventDefault();
  }
  render() {
    const {onSubmit} = this;
    return (
      <form onSubmit = { onSubmit }>
      <label>
        First Name:
        <input type="text" name="First Name"/>
      </label>
      <label>
        Last Name:
        <input type="text" name="Last Name"/>
      </label>
      <label>
        Email:
        <input type="text" name="Email"/>
      </label>
      <label>
        GPA:
        <input type="text" name="GPA"/>
      </label>
      <label>
      Enroll at:
        <select>

        </select>
      </label>
      <button>Create Student</button>
    </form>
    )
  }
}

export default AddStudent;
