import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(robot => this.setState({ robots: robot}))
  }

  handleChange = (e) => {
      this.setState({ searchField: e.target.value })
  };

  render(){

    //destructoring
    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1> Robots Rolodex </h1>
        <SearchBox
          placeholder='search robots'
          handleChange = {this.handleChange}
        />
      <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
