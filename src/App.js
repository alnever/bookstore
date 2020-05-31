import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar>
          <NavbarBrand>Awesome Book Store</NavbarBrand>
          <Nav className="mr-auto">
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/manage">Manage</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/manage">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}


export default App;
