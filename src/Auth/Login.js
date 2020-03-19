import React, {useState} from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap';
import '../css/App.css'
import APIURL from '../helpers/environment'

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        if(username && password) {

        fetch(`${APIURL}/api/login`,{
            method: 'POST',
            body: JSON.stringify({username: username, passwordhash: password}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then (
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            if(data.error){
                console.log('unable to authenticate')
            } else {
                props.updateToken(data.sessionToken) 
                props.updateUserId(data.user.id);
            }
            // props.updateUserId(data.id)
        })
        }else{
            return alert('Please fill in all Required fields, friend.') 
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <Form onSubmit= {handleSubmit} autoComplete= "off">
                <FormGroup>
                    {/* <Label htmlFor= 'username'>Username</Label> */}
                    <Input placeholder= 'username' onChange= {(e) => setUsername(e.target.value)}name= 'username' value={username}/>
                    
                </FormGroup>
                <FormGroup>
                    {/* <Label htmlFor= 'password'>Password</Label> */}
                    <Input  placeholder= 'password' type="password" onChange={(e) => setPassword(e.target.value)} name= 'password' value={password}/>
                </FormGroup>
                    <Button className= 'loginBut' color= 'success' size= 'md' type= 'submit'>Login</Button>
            </Form>

           <br/>
           <br/>
           <br/>
           <br/>
           
        </div>
    )
}

export default Login;