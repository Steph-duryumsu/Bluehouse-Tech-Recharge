// src/App.js
import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import WelcomePage from './Pages/Welcomepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
