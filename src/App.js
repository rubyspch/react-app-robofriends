import React, {Fragment, Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import {robots} from './robots';
import './App.css'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            })
        
    }
    onSearch = (event) => {
        this.setState({searchfield: event.target.value}) //do this to change state
        
    }
    render (){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0){
            return <h1>Loading...</h1>
        } else{
            return (
                <Fragment>
                    <h1 className='tc f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearch}/>
                    <CardList robots={filteredRobots}/>
                </Fragment>
            );
        }
        
    }
};

export default App;