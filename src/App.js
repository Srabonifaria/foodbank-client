import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Contact from './Components/Home/Contact/Contact';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login/Login';
import Order from './Components/Order/Order/Order';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AllUser from './Components/AllUser/AllUser/AllUser';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import Admin from './Components/Home/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
           <Route path="/order">
             <Order></Order> 
           </Route>
           <Route path="/dashboard">
             <Order></Order> 
           </Route>
           <PrivateRoute path="/admin">
             <Admin></Admin> 
           </PrivateRoute>
          <PrivateRoute path="/dashboard/order">
             <Dashboard></Dashboard> 
           </PrivateRoute>
          <Route path="/alluser"> 
             <AllUser></AllUser>
           </Route> 
           <Route path="/makeAdmin"> 
             <MakeAdmin></MakeAdmin>
           </Route>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
