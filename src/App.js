import React from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';

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
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
