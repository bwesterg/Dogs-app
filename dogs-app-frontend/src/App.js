import React, {Component} from 'react';
import './App.css';
import DogContainer from './components/DogContainer';
import DogForm from './components/DogForm';
const dogsUrl = "http://localhost:3000/dogs";

class App extends Component {
  state = {
    dogs: []
  }

  componentDidMount(){
    this.getDogs();
  }
  
  getDogs(){
    fetch(dogsUrl)
      .then(response => response.json())
      .then(dogs => this.setState({dogs})) 
  }

  addDog = (newDog) => {
    this.setState({
      dogs: [...this.state.dogs, newDog]
    })

    fetch(dogsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDog)
    })
  }

  deleteDog = (id) => {
    let filtered = this.state.dogs.filter(dog => dog.id !== id)
    this.setState({
      dogs: filtered
    })
    fetch(dogsUrl + "/" + id, { method: "DELETE" } )
  }

  render(){
    return (
      <div className="App">
        <h1>Dogs App</h1>
        <DogForm addDog={this.addDog}/>
        <DogContainer deleteDog={this.deleteDog} dogs={this.state.dogs}/>
      </div>
    );
  }
}

export default App;
