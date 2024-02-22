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

    componentDidMount(){
        const {dog} = this.props
        if(this.props.dog){
            const {id, name, description, age, washed, exercised} = dog
            this.setState({
                id,
                name,
                description,
                age,
                washed,
                exercised
            })
        }
    }

    handleChange = (event) => {
        let {name, value, checked} = event.target
        
        value = (name === "washed" || name === "exercised") ? checked : value
        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitAction(this.state)
        if(this.props.handleToggle){
            this.props.handleToggle()
        }
    }

    showCheckboxes = () => {
        return this.props.dog
        ? (
            <>
                <div className="input-group">
                    <label>Washed</label>
                    <input 
                        type="checkbox" 
                        name="washed" 
                        checked={this.state.washed} 
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-group">
                    <label>Exercised</label>
                    <input 
                        type="checkbox" 
                        name="exercised" 
                        checked={this.state.exercised} 
                        onChange={this.handleChange}
                    />
                </div>
            </>
        ) : null
    }

    showCloseButton = () => {
        return this.props.dog 
            ? <button className="close-button" onClick={this.props.handleToggle}>CLOSE FORM</button>
            : null
    }

    render(){   
        const {name, description, age, washed, exercised} = this.state
        return (
            <form className="dog-form" onSubmit={this.handleSubmit}>
                {this.props.dog ? <h2>Edit Dog</h2> : <h2>Add a new Dog</h2>}
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
                {this.showCheckboxes()}
                <input type="submit" />
                {this.showCloseButton()}
            </form>
        )
    }
}