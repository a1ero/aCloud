/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from '../pages/Home';
import Header from './Header';
import Registration from './Registration';
import Login from './Login';
import { auth } from '../actions/user';
import Disk from './disk/Disk';

//<Route exact path="/cloud" component={Cloud}/>

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(auth())
  },[]) 
  
  return (
    <BrowserRouter>
      <div className='app'>
        <Header/>
        <Switch>
          <Route exact path="/cloud" component={Home}/>
        </Switch>
        <div className='wrap'>
          {!isAuth ? 
            <Switch>
              <Route exact path="/registration" component={Registration}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/" component={Home}/>
              <Redirect to="/" />
            </Switch>
              :
            <Switch>
              <Route exact path="/" component={Disk}/>
              <Redirect to="/" />
            </Switch>
          }
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
