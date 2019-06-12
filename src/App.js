import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersComponent from './UsersComponent';

function App() {
  return (
    <div className="App container">
       <p className="app-title">Users Fetch App </p>
      <UsersComponent />
    </div>
  );
}

export default App;
