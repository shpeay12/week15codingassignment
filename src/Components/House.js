import React from "react";
import './House.css'

function House({ house, onDelete, onEdit}) {

    return (
        <div className="house">
            <h2>{house.name}</h2>
            <p>House Number: {house.houseNumber}</p>
            <p>Address: {house.address}</p>
            <p>Phone Number: {house.phoneNumber}</p>
            <p>Number of Residents: {house.residentsNumber}</p>
            <button onClick={() => onEdit(house)}>Edit</button>
            <button onClick={() => onDelete(house.id)}>Delete</button>
        </div>
    )
}

export default House;