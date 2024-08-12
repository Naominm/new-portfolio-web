// CardList.js
import React from 'react';
import Card from './Card';
import { FaCode, FaPen, FaChalkboardTeacher } from 'react-icons/fa';

const data = [
    { id: 1, icon: <FaCode />, title: "Web Development & Design" },
    { id: 2, icon: <FaPen />, title: "Technical Writing" },
    {
        id: 3,
        icon: <FaChalkboardTeacher />, // Updated icon
        title: "Mentor",
    },
   
];

const CardList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  font-secondary">
            {data.map((item) => (
                <Card key={item.id} onClick={() => console.log(`${item.title} clicked`)}>
                    {React.cloneElement(item.icon, { color: "#1D81D6" })}
                    <h3 className="text-lg font-bold">{item.title}</h3>
                </Card>
            ))}
        </div>
    );
};

export default CardList;
