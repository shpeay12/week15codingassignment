import React, { useState, useEffect } from 'react';
import axios from 'axios';
import House from './House';
import HouseForm from './HouseForm';
import './HouseList.css'

function HouseList() {
    const [houses, setHouses] = useState([]);
    const [currentHouse, setCurrentHouse] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://65143e728e505cebc2eb0534.mockapi.io/House`);
            setHouses(response.data);
        }
        fetchData();
    }, []);

    const handleAddOrUpdateHouse = async (house) => {
        if (house.id) {
            const response = await axios.put(`https://65143e728e505cebc2eb0534.mockapi.io/House/${house.id}`, house);
            setHouses(prev => prev.map(h => h.id === house.id ? response.data : h));
        } else {
            const response = await axios.post(`https://65143e728e505cebc2eb0534.mockapi.io/House`, house);
            setHouses(prev => [...prev, response.data]);
        }
        setCurrentHouse(null);
    };

    const handleDeleteHouse = async (id) => {
        await axios.delete(`https://65143e728e505cebc2eb0534.mockapi.io/House/${id}`);
        setHouses(prev => prev.filter(h => h.id !== id));
    };

    return (
        <div className="container">
            <div className="form-container">
                <HouseForm onSubmit={handleAddOrUpdateHouse} initialData={currentHouse} />
            </div>
            <div className="houselist">
                {houses.map(house => (
                    <House key={house.id} house={house} onDelete={handleDeleteHouse} onEdit={setCurrentHouse} />
                ))}
            </div>
        </div>
    );
    
}

export default HouseList;