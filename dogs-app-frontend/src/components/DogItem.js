import react from 'react';

export default function DogItem({name, description, age, washed, exercised}){
    return(
        <li className="dog-item">
            <h3>{name}</h3>
            <h3>{description}</h3>
        </li>
    )
}