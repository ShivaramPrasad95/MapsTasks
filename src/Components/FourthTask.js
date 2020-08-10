import React from "react";
import "../styles.css";
import data from "../data/data2.json";

class FourthTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FourthTask: true,
      Mergedata: data[0]
    };
  }

  render() {
    let { FourthTask, Mergedata } = this.state;
    var country = this.props.country;
    let countryStates = this.props.countrySTATES;

    //DataManipulations
    const values = Object.values(Mergedata);

    // console.log("Helo from fourth", country[0][1]);
    const verify = () => {
      if (country !== "" && country[0][0] === "India") {
        // console.log("fourth task Entered", country);
        return 0;
      } else if (country !== "" && country[0][1] === "Australia") {
        return 1;
      } else {
        return null;
      }
    };

    return (
      <div>
        <h1>Fourth Task</h1>
        {FourthTask
          ? verify() === null
            ? null
            : [...countryStates].concat(values[verify()]).map((val, key) => {
                return <li key={key}>{val}</li>;
              })
          : [...countryStates].concat(values[verify()]).map((val, key) => {
              return <li key={key}>{val}</li>;
            })}
      </div>
    );
  }
}
export default FourthTask;
