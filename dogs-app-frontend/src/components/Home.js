import React from 'react';
import DogForm from './DogForm';
import DogContainer from './DogContainer';

export default function Home(props) {
    return (
        <>
            <DogForm submitAction={props.addDog} />
            <DogContainer updateDog={props.updateDog} deleteDog={props.deleteDog} dogs={props.dogs}/>
        </>
    )
}