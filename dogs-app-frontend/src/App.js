import react, {Component} from 'react';
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

  render(){
    return (
      <div className="App">
        <h1>Dogs App</h1>
        <DogForm />
        <DogContainer dogs={this.state.dogs}/>
      </div>
    );
  }
}

export default App;
