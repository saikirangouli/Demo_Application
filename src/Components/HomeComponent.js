import React from 'react';
import { useState } from 'react';
function MyButton() {
    const [users, setUsers] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/users/');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div>
      <h1 data-testid= "home-1">User List</h1>
      <button onClick={fetchData}>Fetch Users</button>
      <ul>
        {users.map(user => (
            
          <li key={user.id}>{user.id}  {user.name}  {user.age}</li>
        ))}
      </ul>
     

    </div>
  );

}




export default MyButton;
