import React, { useState } from 'react';
import DogForm from './DogForm';

export default function DogItem({id, name, description, age, washed, exercised, deleteDog, updateDog}){

    // 'un' destructuring here so the dog/data can be sent to the form as a prop,
    // and then conditionally render either the form for a new dog, OR the form
    // to edit an existing dog
    const dog = {id, name, description, age, washed, exercised}

    //using a hook
    const [isToggled, setIsToggled] = useState(false)
    const handleClick = (event) => deleteDog(id)
    const handleToggle = (event) => setIsToggled(!isToggled)
    const dogCard = () => (
        <li className="dog-item">
            <h3>{name}</h3>
            <h3>{description}</h3>
            <button onClick={handleClick} className="delete-button">DELETE</button>
            <button onClick={handleToggle} className="edit-button">EDIT</button>
        </li>
    )


    return isToggled 
        ? <DogForm 
            handleToggle={handleToggle} 
            submitAction={updateDog} 
            dog={dog} 
        /> 
        : dogCard()
}