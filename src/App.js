import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBarComponent';
import MyButton from './Components/HomeComponent';
import CreateUser from './Components/CreateUserComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/users">
            <MyButton />
          </Route>
          <Route path="/create-user">
            <CreateUser />
          </Route>
          <Route path="/delete-user/">
            <CreateUser />
          </Route>
          <Route path="/">
            <h1>This is Home page of React App</h1>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
