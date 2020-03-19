import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { UserForm, Users } from './component';

function App() {
  const [users, setUsers] = useState([]);

  const apiCall = (formData) => {
    axios.post('https://reqres.in/api/users', {...formData})
    .then(response => setUsers(prevState => [...prevState, response.data]))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <UserForm api={apiCall} />
      <Users users={users} />
    </div>
  );
}

export default App;