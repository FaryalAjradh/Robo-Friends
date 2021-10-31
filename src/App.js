import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; // write in curly braces to destructure it as it is not export default
import './App.css';

class App extends Component {
    constructor() {
        super()                 // calls constructor of the Compoenent class
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    // when making own functions in React, use arrow functions
    // because "this" is considered to be variable from the event (which is input field from SearchBox and not App.js)
    onSearchChange = (event) => {      // similar to onchange event in javascript
        // this.state.searchField = something wont work, instead use:
        this.setState({ searchField: event.target.value });
        // console.log(event.target.value);
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        // console.log(filteredRobots);
        return (
            <div className="tc">
                <h1 className="f2">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;