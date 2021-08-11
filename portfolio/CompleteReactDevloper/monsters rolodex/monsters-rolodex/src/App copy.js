import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import logo from './logo.svg';
import './App.css';
// https://jsonplaceholder.typicode.com/users
// ! where is the component class located?
  // *component is a property on the react library that we can use 
class App extends Component{
  constructor(){
    // todo: super calls the constructor on the Component class
    super()
    // *this.state exists on our class app through the superand compnent
    this.state ={
      // *we want the initial state as an empty state
      // * componentDidMount() will eventually populate the array
      monsters:[]
    }
  }
  // todo: these are lifecycle mehtods- methods that get called at different stages of when this compnent is rendered
  // todo: componentDidMount - when this componentn mounts aka puts our compennet on the page, it renders it on the DOM for the firtime
    //  todo: when it does that, it will call whatver block of code we write inside
  componentDidMount(){
    // *we use native javasript to fetch the request and make an API request to the URL
    // * what fetch returns is a promise
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>
      // console.log(response)
      // *we will return resonse with the JSON method, that will give us back that rsponse in JSON format we want
      response.json())
      // *then that will get returnred to us as a new promise, which we will now have as the body which will be the array of data
      .then(users=>this.setState({monsters:users}))
  }
  render(){
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}>
        {this.state.monsters.map(monster =>(
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
        </CardList>
      </div>
    );
  }
}

// *this is the orignal code that was there before we crated the class
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
