import React, {Component} from 'react';
import './App.css';
import DogContainer from './components/DogContainer';
import DogForm from './components/DogForm';
import { patchDog, postDog, deleteDog } from './helpers/index';
import SignUpForm from './components/SignUpForm';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';

const dogsUrl = "http://localhost:3000/dogs/";

class App extends Component {
  state = {
    dogs: [],
    user: {},
    alerts: []
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

  signUp = (user) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({user})
    })
    .then(response => response.json())
    .then(response => {
      if (response.errors){
        this.setState({alerts: response.errors})
      } else {
        localStorage.setItem('token', response.token)
        this.setState({
          user: response.user,
          alerts: ["User successfully created!!"]
        })
      }
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Dogs App</h1>
        <Switch>
          <PrivateRoute 
            exact
            path="/" 
            component={Home} 
            submitAction={this.addDog}
            updateDog={this.updateDog}
            deleteDog={this.deleteDog} 
            dogs={this.state.dogs}
          />
          <Route exact path="/signup" render={(routerProps) => <SignUpForm signUp={this.signUp} alerts={this.state.alerts}/>} />
          {/* <DogForm submitAction={this.addDog} />
          <DogContainer updateDog={this.updateDog} deleteDog={this.deleteDog} dogs={this.state.dogs}/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
