import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ robots: json }))
  }


  render() {
    return (
      <div className="App">
        {this.state.robots.map(robot => <h1 key={robot.id}>{robot.name}</h1>)}
      </div>
    );
  }
}

export default App;
