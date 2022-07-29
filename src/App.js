import React from 'react';
import Users from './components/Users';

function App() {
  console.log("app");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Список пользователей</h1>
      </header>
      <Users />
    </div>
  );
}

export default App;
