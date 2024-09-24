import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LudoBoard from './LudoBoard';
import ToDoList from './ToDoList';
import SignUp from './SignUp';
import Login from './Login';
import Error from './Error';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/LudoBoard" element={<LudoBoard />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;