import React from 'react';
import './App.css';
import imgUrl from './assets/images/GitHub.svg';
const config = {
  github: "https://github.com/goodmornight",
  // bilibili: "https://space.bilibili.com/281934317",
  // zhihu: "https://www.zhihu.com/people/li-lan-hui-29",
  // juejin: "https://juejin.cn/user/1169536103495064",
}

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

function Media() {

  return (
    <div>
      <a target="_blank" href={config.github}>
        <img src={imgUrl} />
      </a>
    </div>
  )
}

function App() {
  Media()
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Media />
      </header>
    </div>
  );
}

export default App;
