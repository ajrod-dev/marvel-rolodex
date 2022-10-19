import {Component} from 'react';
import './App.css';
import MARVEL_API_KEY from "./keys.js";


class App extends Component {
  constructor(){
    super();

    this.state = { 
      monsters:[],
      searchField: '',
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
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return {searchField}
    })
  }
  
  render(){
    console.log('render')

    const{monsters, searchField} = this.state
    const {onSearchChange} = this

    const filteredMonsters = monsters.filter((monster) => { 
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search Monsters' 
        onChange={onSearchChange}
      />
        {filteredMonsters.map((monster)=> {
            return (<h1 key={monster.id}>{monster.name}</h1> )
          })}
      </div>
    );
  }
}

export default App;
