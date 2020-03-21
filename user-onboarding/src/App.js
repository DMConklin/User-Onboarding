import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { UserForm, Users } from './component';
import { MainHeader, AppContainerDiv } from './component/style';

function App() {
  const [users, setUsers] = useState([{
    id: 1,
    name: 'Darrell',
    email: 'test@test.com',
    password: 'qwerasdfzxcv',
    createdAt: 'init',
    tos: true
  },
  {
    id: 2,
    name: 'Darrien',
    email: 'jest@test.com',
    password: 'qwerafzxcv',
    createdAt: 'init',
    tos: true
  }]);

  const apiCall = (formData) => {
    axios.post('https://reqres.in/api/users', {...formData})
    .then(response => setUsers(prevState => [...prevState, response.data]))
    .catch(err => console.log(err))
  }

  const removeUserHandler = (id) => {
    setUsers( prevState => {
      return prevState.filter(user => user.id !== id);
    })
  }

  return (
    <AppContainerDiv>
      <MainHeader>
          <h1>User Onboarding</h1>
      </MainHeader>
      <UserForm api={apiCall} />
      <Users users={users} removeUser={removeUserHandler} />
    </AppContainerDiv>
  );
}

export default App;