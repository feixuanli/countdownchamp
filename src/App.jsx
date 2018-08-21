import React, { Component } from 'react'; 
import './App.css';
import Clock from './Clock';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: ''
        };
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline})
       
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">countdown to {this.state.deadline}</div>
                <Clock />
                <div>
                    <input 
                        onChange={event => {this.setState({newDeadline: event.target.value})}}
                        placeholder='new date' />
                    <button onClick={() => this.changeDeadline()}>submit</button>
                </div>
            </div>
        );
    }
}

export default App;