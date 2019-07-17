import React from 'react';
import {HashRouter} from 'react-router-dom';
import AddStudent from './AddStudent'
import Schools from './Schools'
import Nav from './Nav'
import Students from './Students'

const App = () => (
<HashRouter>
  <div >
    <Nav />
    <AddStudent/>
  </div>
</HashRouter>
)

export default App;
