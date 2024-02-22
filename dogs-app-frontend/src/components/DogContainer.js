import React from 'react';
import DogItem from './DogItem';

export default function DogContainer({dogs, deleteDog, updateDog}){

    const showDogs = () => {
        return dogs.map(dog => <DogItem key={dog.id} {...dog} updateDog={updateDog} deleteDog={deleteDog} />)
    };

    return(
        <ul className="dog-list">
            {showDogs()}
        </ul>
    )
}