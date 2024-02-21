import react, {Component} from 'react';

const initialState =  {
    name: "",
    description: "",
    age: "",
    washed: false,
    exercised: false
}

export default class DogForm extends Component {

    state = initialState

    render(){
        return (
            <form className="dog-form">
                <h2>Add a new Dog</h2>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Description</label>
                <input type="text" name="description"/>
                <label>Age</label>
                <input type="number" name="age" />
                <div className="checkbox-input">
                    <label>Washed</label>
                    <input type="checkbox" name="washed"/>
                    <label>Exercised</label>
                    <input type="checkbox" name="exercised"/>
                </div>
                <input type="submit" />
            </form>
        )
    }
}