import React from "react";
import "../styles.css";

class FirstTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state
    };
  }
  render() {
    let userInput = this.props.country;
    let countryStates = this.props.countrySTATES;

    return (
      <div>
        <div>
          <h1>First Task</h1>
          <h3>{userInput}</h3>
          {Object.values(countryStates).map((name, key) => (
            <li key={key}>{name}</li>
          ))}
        </div>
      </div>
    );
  }
}
export default FirstTask;
