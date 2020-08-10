import React from "react";
import "../styles.css";
import data from "../data/data2.json";

class FifthTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FifthTask: false,
      Mergedata: data[0]
    };
  }

  render() {
    let { FifthTask, Mergedata } = this.state;
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

    // remove the duplicates from the array
    const finalArray = [...countryStates].concat(values[verify()]);
    const filtered = [...new Set(finalArray)];
    // console.log(filtered);

    return (
      <div>
        <h1>Fifth Task</h1>
        {FifthTask
          ? filtered.map((val, k) => {
              return "";
            })
          : filtered.map((val, k) => {
              if (val === undefined) {
                return "";
              }
              // console.log(val);
              return <li>{val}</li>;
            })}
      </div>
    );
  }
}
export default FifthTask;
