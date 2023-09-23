import React from 'react';
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Userlist from './Components/Userlist';
import Users from './Components/Users';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
       <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Nav />
              <Userlist />
               <Footer /> 
            </React.Fragment>
          }
        />
         <Route
          path="/listview"
          element={
            <React.Fragment>
              <Nav/>
              <Users />


               <Footer /> 
            </React.Fragment>
          }
        />
    </Routes>
    </>
  );
}

export default App;
