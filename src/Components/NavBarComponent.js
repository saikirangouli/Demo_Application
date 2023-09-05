

// function Navbar() {
//   return (
//     <div>
//     <nav style={{"background":"yellow",'display':'flex','justify-content': 'space-around','textDecoration':'none' }}>

      
//           <Link to="/">Home</Link>


//           <Link to="/about">About</Link>


//           <Link to="/contact">Contact</Link>
//     </nav>
//     </div>
//   );
// }

// export default Navbar;
// src/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav style={{"display":"flex","justifyContent":'space-evenly',"backgroundColor":'violet',"textDecoration":'none'}}>
        <a href="/" style={{"fontSize":"25px"}}>Home</a>
        <a href="/users" style={{"fontSize":"25px"}}>Users</a>
        <a href="/create-user" style={{"fontSize":"25px"}}>Create User</a>
      
    </nav>
  );
}

export default Navbar;
