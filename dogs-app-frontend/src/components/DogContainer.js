import React from 'react';
import DogItem from './DogItem';

export default function DogContainer({dogs, deleteDog}){

    const showDogs = () => {
        return dogs.map(dog => <DogItem key={dog.id} {...dog} deleteDog={deleteDog} />)
    };

    return(
        <ul className="dog-list">
            {showDogs()}
        </ul>
    )
}