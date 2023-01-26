import React,{Component} from "react";

class Moon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date('Thu Jan 25 2023 16:36:00 GMT+0530'),
      currentTime: new Date()
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({currentTime: new Date()});
    }, 1000)
  }

  renderTimeDifference() {
    const {currentTime, dateTime} = this.state;
    let delta = Math.abs(currentTime.getTime() - dateTime.getTime()) / 1000;
    const days = Math.floor(delta / 86400);
    delta -= days * 86400;
    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    const seconds = Number(delta % 60).toFixed(0);
    return (
      <div className="moon-time">
        {days} days | {(hours+'').padStart(2, "0")}:{(minutes+'').padStart(2, "0")}:{(seconds+'').padStart(2, "0")}
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <img style={{width:'100%', height:"auto"}} alt="" src={ require("../img/moon.jpg") }/>
        <div style={{position: 'fixed', bottom: '50%', left: 0, right: 0,}}>
          {this.renderTimeDifference()}
        </div>
      </div>
    );
  }
}
export default Moon;