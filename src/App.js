import React, {useState, useEffect } from 'react';
import Sitebar from './Home/Navbar';
import Auth from './Auth/Auth';
import GemsIndex from './Gems/GemsIndex';
import "./css/App.css" 




function App() {

const [sessionToken, setSessionToken] = useState(''); 

useEffect(() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}
const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}
const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <GemsIndex token= {sessionToken}/>
  : <Auth updateToken={updateToken}/>) 
}

  return (
    <div>
      {sessionToken ? <Sitebar clickLogout= {clearToken}/> : null}
      {protectedViews()}
      {/* //setToken= {this.setSessionState}/> */}
    </div>
  );
}


export default App;