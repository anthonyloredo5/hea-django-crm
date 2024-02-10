import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Login from './pages/auth/Login';
import LoginForm from './pages/auth/Login.component';
import { Home } from './pages/home/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  return (
    <>
      <GoogleOAuthProvider clientId="159311272164-en801f29ba4c52gpil6i821cl6pnrjrt.apps.googleusercontent.com">
        <Router>
          <Routes>
            {/* <Route
            path='/'
            element={
              isLoggedIn ? (hasSelectedCompany ? (<Home />) : (<Navigate to='/company' />)) : (<Login />)
            }
          /> */}
            {/* <Route path='*' element={isLoggedIn ? <Home /> : <Login />} /> */}
            <Route path="*" element={<Home />} />
            <Route path="/app" element={<Home />} />
            <Route path='/login' element={<LoginForm />} />
            {/* <Route path="/" element={<Navigate to="/contacts" replace />} /> */}
            {/* <Route
            path='/'
            element={isLoggedIn ? <Home /> : <Login />
            // <Navigate to='/login' />
          }
          >
          </Route> */}
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
