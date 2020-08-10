import React from "react";
import "../styles.css";

class SecondTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondTask: true
    };
  }
  render() {
    let { secondTask } = this.state;
    let countryStates = this.props.countrySTATES;
    var first = [...countryStates].shift();
    // console.log("hi from second", first);

    return (
      <div>
        <h1>Second Task</h1>
        {secondTask ? first : null}
      </div>
    );
  }
}
export default SecondTask;
