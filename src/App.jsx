import React, { Component } from 'react'; 
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            counter: 0
        };
    }

    changeDeadline() {
        console.log('hey')
        this.setState({deadline: 'November 25, 2017'});
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">countdown to {this.state.deadline}</div>
                <div>
                    <div className="Clock-days"> 14 days </div>
                    <div className="Clock-hours"> 30 hours </div>
                    <div className="Clock-minutes"> 14 minutes </div>
                    <div className="Clock-seconds"> 20 seconds </div>
                </div>
                <div>
                    <input placeholder='new date' />
                    <button onClick={() => this.changeDeadline()}>submit</button>
                </div>
            </div>
        );
    }
}

export default App;