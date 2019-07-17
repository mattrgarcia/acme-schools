import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const SET_STUDENTS = 'SET_STUDENTS';
const SET_SCHOOLS = 'SET_SCHOOLS';
const SET_SCHOOL = 'SET_SCHOOL';

const schoolsReducer = (state = [], action) => {
  switch (action.type){
    case SET_SCHOOLS:
     return action.schools;
    case SET_SCHOOL:
      return action.school;
   }
   return state;
};

const studentsReducer = (state = [], action) => {
  switch(action.type){
    case SET_STUDENTS:
    return action.students;
  }
  return state;
};

const reducer = combineReducers({
  schools: schoolsReducer,
  students: studentsReducer
});

const _setSchools = (schools)=> ({
  type: SET_SCHOOLS,
  schools
});

const _setSchool = (school)=> ({
  type: SET_SCHOOL,
  school
});

const _setStudents = (students)=> ({
  type: SET_STUDENTS,
  students
});

const setSchools = ()=> {
  return async(dispatch) => {
    const response = await axios.get('/api/schools');
    return dispatch(_setSchools(response.data));
  };
};

const setSchool = (id)=> {
  return async(dispatch) => {
    const response = await axios.get(`/api/schools/${id}`);
    return dispatch(_setSchool(response.data));
  }
}
const setStudents = ()=> {
  return async(dispatch) => {
    const response = await axios.get('/api/students');
    return dispatch(_setStudents(response.data));
  };
};


const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export { setSchools, setStudents, setSchool }
