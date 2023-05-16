import { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch(`https://api.github.com/users`)
    .then(response => response.json())
    .then(data => {
      setUsers(data)
    })
  },[]);  

  useEffect(()=>{
   
  },[]);  

  // git checkout -b develop
  // git commit -m "develop"
  // git push origin develop
  // git fetch
  // git checkout main =>main branch texapoxvelu hamar
  // git commit -m "test"
  return (
    <div className = 'App'>
      {
        users.map(item => 
      <div key={item.id}>
        <p>{item.id}</p>
        <p>{item.type}</p>
        <p className = 'login'>{item.login}</p>
        <img src={item.avatar_url} height={"200px"}/>
      </div>)
      }
    </div>
  );         
}

export default App;
