import React from 'react';
import {Table, Button} from 'reactstrap';
import '../css/App.css';

import APIURL from '../helpers/environment'



const GemTable = (props) => {

const deleteGem = (gem) => {
    fetch(`${APIURL}/api/gem/${gem.id}`, {
    method: 'DELETE',
    headers: new Headers ({
        'Content-Type': 'application/json', 
        'Authorization': props.token
         })
    })
    .then(() => props.fetchGems())
}

const gemMapper = () => {
    console.log(props.gems)
    return props.gems.map((gem, index) => {
        console.log(gem)
        return(
            
            <tr key= {index}>
                
                <th scope= 'row'>{gem.id}</th> 
                <td>{gem.locationType}</td>
                <td>{gem.locationAddress}</td>
                <td>{gem.locationCoordinates}</td>
                <td>{gem.description}</td>
                <td>
                   {gem.owner === gem.userId ? <Button outline color= 'success' size= 'sm' onClick={() => {props.editUpdateGem(gem); props.updateOn()}}>Edit</Button> : null}
                {gem.owner === gem.userId ? <Button outline color= 'warning'  size= 'sm' onClick={() => {deleteGem(gem)}}>Delete</Button> : null}
                </td>
                
            </tr>
            
        )
    })
}

    return (
        <>
        <h5>- a little peace and quiet never hurts</h5>
        <hr/>
        <Table hover bordered dark striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Location Type</th>
                    <th>Location Address</th>
                    <th>Location Coordinates</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {gemMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default GemTable;