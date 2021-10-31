import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from './robots'; // write in curly braces to destructure it as it is not export default
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor() {
        super()                 // calls constructor of the Compoenent class
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        // console.log("check");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();    // convert the response into json
        })
        .then(users => {
            this.setState({robots: users});
        })
        
    }

    // when making userdefined functions in React, use arrow functions
    // because "this" is considered to be variable from the event (which is input field from SearchBox and not App.js)
    onSearchChange = (event) => {      // similar to onchange event in javascript
        // this.state.searchField = something wont work, instead use:
        this.setState({ searchField: event.target.value });
        // console.log(event.target.value);
    }
    
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        // console.log(filteredRobots);
        if(!robots.length) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f2">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
        
    }
}

export default App;