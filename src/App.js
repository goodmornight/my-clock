import React from 'react';
import './App.css';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render(){
    let date = this.state.date;
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    return (
      <div>
        <h1>{y + '年' + m + '月' + d + '日'}</h1>
        <h1>{date.toLocaleTimeString()}</h1>
      </div>
      
      )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
    </div>
  );
}

export default App;
