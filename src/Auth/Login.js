import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import '../css/App.css'

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        if(username && password) {

        fetch('http://localhost:3002/api/login',{
            method: 'POST',
            body: JSON.stringify({username: username, passwordhash: password}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then (
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken) 
            // props.updateUserId(data.id)
        })
        }else{
            return alert('Please fill in all Required fields, friend.') 
        }
    }

    return (
        <div>
            
            {/* <br/>
            <br/>
            <br/> */}
            <br/>
            <br/>
            <br/>
            <br/>



            <h2>Login</h2>
            <Form onSubmit= {handleSubmit}>
                <FormGroup>
                    {/* <Label htmlFor= 'username'>Username</Label> */}
                    <Input placeholder= 'username' onChange= {(e) => setUsername(e.target.value)}name= 'username' value={username}/>
                    
                </FormGroup>
                <FormGroup>
                    {/* <Label htmlFor= 'password'>Password</Label> */}
                    <Input  placeholder= 'password' type="password" onChange={(e) => setPassword(e.target.value)} name= 'password' value={password}/>
                </FormGroup>
                    <Button className= 'loginBut' color= 'success' size= 'lg' type= 'submit'>Login</Button>
            </Form>
        </div>
    )
}

export default Login;