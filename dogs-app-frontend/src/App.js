import React, {Component} from 'react';
import './App.css';
import DogContainer from './components/DogContainer';
import DogForm from './components/DogForm';
import { patchDog, postDog, deleteDog } from './helpers/index';
const dogsUrl = "http://localhost:3000/dogs/";

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
    postDog(newDog)
  }

  updateDog = (updatedDog) => {
    let dogs = this.state.dogs.map(dog => dog.id === updatedDog.id ? updatedDog : dog) 
    this.setState({ dogs })
    patchDog(updatedDog)
  }

  deleteDog = (id) => {
    let filtered = this.state.dogs.filter(dog => dog.id !== id)
    this.setState({
      dogs: filtered
    })
    deleteDog(id)
  }

  render(){
    return (
      <div className="App">
        <h1>Dogs App</h1>
        <DogForm submitAction={this.addDog} />
        <DogContainer updateDog={this.updateDog} deleteDog={this.deleteDog} dogs={this.state.dogs}/>
      </div>
    );
  }
}

export default App;
