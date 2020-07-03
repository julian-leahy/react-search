import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [
        {
          name: 'Robby',
          id: 1
        },
        {
          name: 'Timmy',
          id: 2
        }
      ]
    }
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
