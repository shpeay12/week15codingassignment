import React, { useState, useEffect } from 'react';

function HouseForm({ onSubmit, initialData = {} }) {
    const [house, setHouse] = useState({ 
        name: '', 
        address: '',
        houseNumber: '', 
        phoneNumber: '', 
        residentsNumber: '', 
        id: '' });

    useEffect(() => {
        if (initialData) {
            setHouse({
                ...initialData,
                name: initialData.name || '',
                address: initialData.address || '',
                houseNumber: initialData.houseNumber || '',
                phoneNumber: initialData.phoneNumber || '',
                residentsNumber: initialData.residentsNumber || '',
                id: initialData.id || ''
            });
        }
    }, [initialData]);
        

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHouse(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(house);
        setHouse({
            name: '', 
            address: '',
            houseNumber: '', 
            phoneNumber: '', 
            residentsNumber: '', 
            id: '' 
        });
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <h3>Enter your information below to add your home!</h3>
            <input name="name" value={house.name || ''} onChange={handleChange} placeHolder="House Name" /> <br></br>
            <input name="houseNumber" value={house.houseNumber || ''} onChange={handleChange} placeholder="House Number" /> <br></br>
            <input name="address" value={house.address || ''} onChange={handleChange} placeHolder="House Address" /> <br></br>
            <input name="phoneNumber" value={house.phoneNumber || ''} onChange={handleChange} placeHolder="Phone Number" /> <br></br>
            <input name="residentsNumber" value={house.residentsNumber || ''} onChange={handleChange} placeholder="Number of Residents" /> <br></br>
            <button type="submit">Submit</button>
        </form>
    );
}

export default HouseForm;