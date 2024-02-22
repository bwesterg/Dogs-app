import React from 'react';

export default function DogItem({id, name, description, age, washed, exercised, deleteDog}){

    const handleClick = (event) => deleteDog(id)

    return(
        <li className="dog-item">
            <h3>{name}</h3>
            <h3>{description}</h3>
            <button onClick={handleClick} className="delete-button">DELETE</button>
        </li>
    )
}