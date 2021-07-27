import React, {Fragment, Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
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
            }
        )  
    }
    onSearch = (event) => {
        this.setState({searchfield: event.target.value}) //do this to change state 
    }
    render (){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return !this.state.robots.length ?
            <h1>Loading...</h1> :
            (
                <Fragment>
                    <h1 className='tc f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearch}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </Fragment>
            );
    }
}

export default App;