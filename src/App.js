import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MARVEL_API_KEY from "./keys.js";


class App extends Component {
  constructor(){
    super();

    this.state = { 
      monsters:[],
    };
    console.log('constructor')
  }
  componentDidMount(){
    console.log('component did mount')
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => 
    this.setState(() => {
      return {monsters: users}
    },
    ()=>{
      console.log(this.state)
    }))
  }
  render(){
    console.log('render')
    return (
      <div className="App">
        {this.state.monsters.map((monster)=> {
          return (<h1 key={monster.id}>{monster.name}</h1> )
        })}
      </div>
    );
  }
}

export default App;
