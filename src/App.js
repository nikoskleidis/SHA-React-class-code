import React, {useState} from 'react';
import './App.css';
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [showUserForm, setShowUserForm] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShowUserForm(!showUserForm)}>Toggle Form</button>
        {showUserForm && <UserForm />}
        <UserList className="userListCls" />
      </header>
    </div>
  );
}

export default App;
