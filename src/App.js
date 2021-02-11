import './App.css';
import { Component } from 'react';
import Person from './Person/Person';

class App extends Component{
  state={
    persons: [
      {name: 'Max', age:28},
      {name: 'An', age:30},
      {name: 'TS', age:27}
    ],
    otherState: 'some other value'
  }

  switchNameHandler=() =>{
    // do not do this: this.state.persons[0].name='Maximilian';
    this.setState({persons: [
      {name: 'Maximilian', age:28},
      {name: 'Manu', age:30},
      {name: 'Stephanie', age:35}
    ]
    
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Hi, I'm react app</h1>
          <p>This is really working</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name="Anas" age="34"/>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby is racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;