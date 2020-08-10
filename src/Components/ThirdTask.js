import React from "react";
import "../styles.css";

class ThirdTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ThirdTask: true
    };
  }

  render() {
    let { ThirdTask } = this.state;
    let countryStates = this.props.countrySTATES;
    var last = [...countryStates].slice(-1).shift();
    // console.log("hi from Third");

    return (
      <div>
        <h1>Third Task</h1>
        {ThirdTask ? last : null}
      </div>
    );
  }
}
export default ThirdTask;
