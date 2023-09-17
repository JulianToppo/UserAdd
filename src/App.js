import './App.css';
import UserForm from './components/UserForm';
import Users from './components/Users';
import {useState} from 'react'

function App() {
  const [users,setUsers]=useState([]);

  const insertUser=(userObj)=>{
    console.log("user insertion called")
    setUsers((users)=>{
      return [userObj,...users];
    })

  }
  return (
    <div className="App">
      <UserForm insertUserFn={insertUser}/>
      {
        users.length>0 &&
        <Users userItems={users}/>
      }
    </div>
  );
}

export default App;
