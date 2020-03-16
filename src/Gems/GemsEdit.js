import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap'; 
import '../css/GemsEdit.css'



const GemsEdit= (props) => {
    const [editLocationType, setEditLocationType] = useState(props.gemToUpdate.locationType);
    const [editDes, setEditDes] = useState(props.gemToUpdate.description);
    const [editLocationCoordinates, setEditLocationCoordinates] = useState(props.gemToUpdate.locationCoordinates); 
    const [editLocationAddress, setEditLocationAddress] = useState(props.gemToUpdate.locationAddress);

    const GemsUpdate = (event, gem) => {
        event.preventDefault();
        fetch(`http://localhost:3002/api/gem/${props.gemToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({locationType: editLocationType, locationAddress: editLocationAddress, locationCoordinates: editLocationCoordinates, description: editDes}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then ((res) => {
            props.fetchGems();
            props.updateOff();
        })
    }

    const modalClose = () => {
        props.updateOff();
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Edit your Hidden Gem<Button onClick={()=> modalClose()} className= 'closeEdit'>Close</Button></ModalHeader>
            <ModalBody>
                <Form onSubmit= {GemsUpdate}>
                    <FormGroup>
                        <Label htmlFor= 'locationType'>Edit Location Type:</Label>
                        <Input name= 'locationType' value= {editLocationType} onChange={(e) => setEditLocationType(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor= 'locationAddress'>Edit Location Address: </Label>     
                        <Input name= 'locationAddress' value= {editLocationAddress} onChange= {(e) => setEditLocationAddress(e.target.value)}/>               
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor= 'locationCoordinates'>Edit Location Coordinates: </Label>     
                        <Input name= 'locationCoordinates' value= {editLocationCoordinates} onChange= {(e) => setEditLocationCoordinates(e.target.value)}/>               
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor= 'description'>Edit Description:</Label>
                        <Input name= 'description' value= {editDes} onChange={(e) => setEditDes(e.target.value)}>
                            
                        </Input>
                    </FormGroup>
                    <Button type= 'submit'>Submit Edit</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
    

}

export default GemsEdit;