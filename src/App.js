import React, {Fragment, Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearch = (event) => {
        this.setState({searchfield: event.target.value}) //do this to change state
        
    }
    render (){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <Fragment>
                <h1 className='tc f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearch}/>
                <CardList robots={filteredRobots}/>
            </Fragment>
        );
    }
};

export default App;