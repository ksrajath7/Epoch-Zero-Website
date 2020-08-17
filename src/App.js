import React from 'react';
import Body from './Components/Body'
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        <Route exact path={`${process.env.PUBLIC_URL}/`}>
          <Sidebar home={true} contact={false} works={false} team={false}/>     
          <Body/>
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/HOME`}>
          <Sidebar home={true} contact={false} works={false} team={false}/>     
          <Body/>
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/WORKS`}>
          <Sidebar home={false} contact={false} works={true} team={false}/>     
          <Body/>
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/TEAM`}>
          <Sidebar home={false} contact={false} works={false} team={true}/>     
          <Body/>
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/CONTACT`}>
          <Sidebar home={false} contact={true} works={false} team={false}/>     
          <Body/>
        </Route>
        </div>
    </BrowserRouter>
  );
}

export default App;
