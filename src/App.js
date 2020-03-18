import React, {useState, useEffect } from 'react';
import Sitebar from './Home/Navbar';
import Auth from './Auth/Auth';
import GemsIndex from './Gems/GemsIndex';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/App.css" 




function App() {

const [sessionToken, setSessionToken] = useState(undefined); 
const [userId, setUserId] = useState(undefined);
// const [clearUserId, setClearUserId] = usestate(undefined);
// console.log(typeof userId, userId);

useEffect(() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateUserId = (newId) => {
  localStorage.setItem('userId', newId);
  setUserId(newId)
}

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

// const clearUserId = () => {
//   localStorage.clear();
//   setUserId(undefined);
// }

const clearToken = () => {
  localStorage.clear();
  setSessionToken(undefined);
}
// const protectedViews = () => {
//   return (
//     sessionToken === undefined ? <Auth updateToken={updateToken}/> : <GemsIndex token= {sessionToken}/>
//   ) 
// }

const protectedViews = () => {
  return sessionToken === undefined ? <Auth updateToken={updateToken} updateUserId={updateUserId} /> : <GemsIndex token={sessionToken} userId={userId} />
}

  return (
    <div>
      {/* <Sitebar clickLogout= {clearToken}/> */}
      {sessionToken === localStorage.getItem('token') ? <Sitebar clickLogout= {clearToken} /> : null}
      {protectedViews()}
      {/* //setToken= {this.setSessionState}/> */}
    </div>
  );
}


export default App;