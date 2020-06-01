import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { Home } from '../pages/Home';
import { Admin } from '../pages/Admin';
import { Auth } from '../pages/Auth';

import { useSelector } from 'react-redux';
import { isLogged } from '../store/selectors/UserSelecotrs'

export const AppRouter = () => {

    const logged = useSelector(state => isLogged(state))

    return (
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
  
          <Router>
            <Switch>
              <Route path="/manage" render={ () => 
                  logged ? <Admin /> : <Auth />
              }/>
              <Route path="/" render= {() => <Home /> } />
            </Switch>
          </Router>
        </div>
    )
}