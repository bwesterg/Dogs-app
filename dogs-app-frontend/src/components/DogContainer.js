import react from 'react';
import DogItem from './DogItem';

export default function DogContainer({dogs}){

    const showDogs = () => {
        return dogs.map(dog => <DogItem key={dog.id} {...dog}/>)
    };

    return(
        <ul className="dog-list">
            {showDogs()}
        </ul>
    )
}