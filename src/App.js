import {Component} from 'react';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = { 
      monsters:[
      { name: 'Ironman',
      id: 'V123abc',
      },
      {
        name: 'Black Panther',
        id: '124abd'
      },
      {
        name: 'Thor',
        id: '134acd'
      },
      {
        name: 'Captain America',
        id: '234bcd'
      },
  ]
    }
  }
  render(){
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
