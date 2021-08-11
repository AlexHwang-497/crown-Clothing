import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SeachBox } from './components/seach-box/search-box.component';
// import logo from './logo.svg';
import './App.css';
// https://jsonplaceholder.typicode.com/users
// ! where is the component class located?
// ! talk to carlos in more depth about state and the one way data flow.  in particular discuss video 37. state vs props
  // *component is a property on the react library that we can use 
  // * app is the parent compnent
class App extends Component{
  constructor(){
    // todo: super calls the constructor on the Component class
    super()
    // *this.state exists on our class app through the superand compnent
      // * we pass down state into the card list component
    this.state ={
      // *we want the initial state as an empty state
      // * componentDidMount() will eventually populate the array
      monsters:[],
      searchField:'',
      // title:

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
  
  // ! discuss with carlos the signficance behind this es6 arrow function here, it is in relation to "this" and binding
  // * the arrow function is that you acuatlly cannot unbind the.  they will automatically get lexical scoping
    // *that means that they bind in this context to the place they were defined in the fist place
  handleChange=(e)=>{
    this.setState({
      searchField:e.target.value,
      
    })
  }

  render(){
    // todo: we are destructuring here, it allows us to pull properties off o f an object and set them as constants
      // todo:   this is the equialient as saying monster = this.state.monsters or searchField = this.state.searchField
      // *in this case we pulling the state property is what we want to pull properties off of
    const {monsters,searchField} =this.state;
    const filteredMonsters = monsters.filter(monster=>
      // *we are double checking to see what we type is the same as what we are searching for
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    // todo: onchange() - it fires with this synthetic evnet, which is essentially just a event in our browser, whenever the input is changed
      // todo: e.target.value, we use .value to capture what is being written in the text box
      // *the set state now will be triggered everytime we type something
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SeachBox
        placeholder='search monsters'
        // *the set state now will be triggered everytime we type something
        handleChange={this.handleChange}
      />
      {/* we are now passing in monsters as a prop  for card-list.compnent.jsx */}
      {/* we will pass in from our app componnent into the CardList */}
      <CardList monsters={filteredMonsters}/>
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
