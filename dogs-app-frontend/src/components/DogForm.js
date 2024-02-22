import React, {Component} from 'react';

const initialState =  {
    name: "",
    description: "",
    age: 0,
    washed: false,
    exercised: false
}

export default class DogForm extends Component {

    state = initialState

    handleChange = (event) => {
        let {name, value, checked} = event.target
        
        value = (name === "washed" || name === "exercised") ? checked : value
        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addDog(this.state)
    }

    render(){   
        const {name, description, age, washed, exercised} = this.state
        return (
            <form className="dog-form" onSubmit={this.handleSubmit}>
                <h2>Add a new Dog</h2>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange}
                />
                <label>Description</label>
                <input 
                    type="text" 
                    name="description" 
                    value={description} 
                    onChange={this.handleChange}
                />
                <label>Age</label>
                <input 
                    type="number" 
                    name="age" 
                    value={age} 
                    onChange={this.handleChange}
                />
                <div className="checkbox-input">
                    <label>Washed</label>
                    <input 
                        type="checkbox" 
                        name="washed" 
                        checked={washed} 
                        onChange={this.handleChange}
                    />
                    <label>Exercised</label>
                    <input 
                        type="checkbox" 
                        name="exercised" 
                        checked={exercised} 
                        onChange={this.handleChange}
                    />
                </div>
                <input type="submit" />
            </form>
        )
    }
}