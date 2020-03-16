import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';  
import '../css/App.css';
import APIURL from '../helpers/environment';


const GemsCreate = (props) => {
    const [locationType, setLocationType] = useState('');  
    const [description, setDescription] = useState('');
    const [locationCoordinates, setLocationCoordinates] = useState('');
    const [locationAddress, setLocationAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(locationType && description && locationAddress){
            fetch(`${APIURL}/api/gem`, {
                method: 'POST',
                body: JSON.stringify({locationType: locationType, description: description, locationCoordinates: locationCoordinates, locationAddress: locationAddress}), 
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            }).then ((res) => res.json())
            .then ((logData) => {
                console.log(logData);
                setLocationType('');
                setDescription('');
                setLocationCoordinates('');
                setLocationAddress('');
                props.fetchGems();
            })
        }else{
            return alert('Please fill in all Required fields, friend.')
        }
    }

    return (
       <>
       <br/>
       <br/>
       {/* <br/> */}
       
        <h3>Enter your Hidden Gem</h3>
        <Form onSubmit= {handleSubmit}>
            <FormGroup>
            <p className= 'pTags'>*required</p>
                {/* <Label htmlFor= 'Location Type'/> */}
                <Input placeholder= 'Location Type' name= 'Location Type' value= {locationType} onChange= {(e) => setLocationType(e.target.value)}/>
                <h6>(examples: Park, Trail, Library)</h6>
            </FormGroup>
            <FormGroup>
            <p className= 'pTags'>*required</p>
                {/* <Label htmlFor= 'locationAddress'/> */}
                <Input placeholder= 'Location Address'name= 'locationAddress' value= {locationAddress} onChange= {(e) => setLocationAddress(e.target.value)}/>
                <h6>(example: "123 fake street Indianapolis, Indiana")</h6>
            </FormGroup>
            <FormGroup>
            <p className= 'pTags'></p>
                {/* <Label htmlFor= 'locationCoordinates'/> */}
                <Input placeholder= 'Location Coordinates'name= 'locationCoordinates' value= {locationCoordinates}onChange= {(e) => setLocationCoordinates(e.target.value)}/>
                <h6>(example: "38.8409° N, 105.0423° W")</h6>
            </FormGroup>
            <FormGroup>
            <p className= 'pTags'>*required</p>
                {/* <Label htmlFor= 'Description'/> */}
                <Input placeholder= 'Description' name= 'Description' value= {description} onChange= {(e) => setDescription(e.target.value)}/>
                <h6>(example: "Quiet and secluded")</h6>
            </FormGroup>
            <Button color= 'success'type= 'submit'>Click to Submit</Button>
        </Form>
        
       </>
        
    )
}

export default GemsCreate;