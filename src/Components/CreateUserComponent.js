// src/CreateUser.js
import React, { useState } from 'react';
import axios from 'axios';
//const axios = require('axios');

function CreateUser() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('http://192.168.0.109:8000/app/users/', { name ,age});
      console.log('User created:', response.data);
      setName('');
      setAge('');
      document.getElementById('result').innerHTML='User is Created Successfully Please visit users page to find all the users'
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        User name : <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={event => setName(event.target.value)}
        /><br/>
        Age : <input  type = "number"
          placeholder = "Age"
          value = {age}
          onChange = {event => setAge(event.target.value)}
          />
          <br/>
          <div id="result"></div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
