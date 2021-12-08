import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import Tweet from './Tweet';
import './App.css'

function App() {
  const [users, setUsers] = useState([
    { name: "Rohit", message: "Hello react" },
    { name: "Jon Snow", message: "I am the true king!!!" },
    { name: "CR7", message: "SIUUUU!!!!" }
  ]);

  return (
    <div className="app">
      {users.map(user =>
        <Tweet name={user.name} message={user.message} />
      )}
    </div>
  );
}
export default App;
