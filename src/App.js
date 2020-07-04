import React from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search/search.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ robots: json }))
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value })
  }


  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return (
      <div className="App">
        <SearchBox placeholder='Search Robots' handleChange={this.handleChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
