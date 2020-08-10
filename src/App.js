import React from "react";
import "./styles.css";
import data from "./data/data1.json";
import FirstTask from "./Components/FirstTask";
import SecondTask from "./Components/SecondTask";
import ThirdTask from "./Components/ThirdTask";
import FourthTask from "./Components/FourthTask";
import FifthTask from "./Components/FifthTask";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: data[0],
      country: "",
      states: "",
      countryCode: ""
    };
    this.code = this.code.bind(this);
  }

  //FirstTask getting countryName
  code(e) {
    e.preventDefault();
    let input = e.target.value;
    this.setState({
      countryCode: input
    });

    const countryCode = Object.entries(this.state.check).map((j) => {
      return j[1].map((b) => {
        console.log(b[e.target.value]);
        return b[input];
      });
    });

    this.setState({ country: countryCode });
  }

  render() {
    let { check, countryCode } = this.state;
    const content = Object.keys(check);

    const values = Object.values(check).map((value, keys) => {
      // console.log(value[0]);
      return Object.entries(value).map((get, k) => {
        // console.log("text::", get[k]);
        return Object.values(get[1]).map((put, k) => {
          // console.log("newText::", put[0]);
          return put;
        });
      });
    });

    //get the specific country with the postal code
    const Cname = (param) => {
      // console.log("Params",param);
      switch (param) {
        case "91":
          return values[1][0][0].map((cn) => {
            return cn;
          });
        case "61":
          return values[1][0][1].map((cn) => {
            return cn;
          });
        default:
          return "";
      }
    };

    return (
      <div className="container">
        <br />
        <h3>Enter the {content[0]} 91 or 61 : </h3>
        <div>
          <input
            type="text"
            value={this.state.countryCode}
            onChange={this.code}
          />
          <br />
          <div>
            <br />
            <div className="jumbotron">
              <div>
                <FirstTask
                  country={this.state.country}
                  countrySTATES={Cname(countryCode)}
                />
              </div>
              <div>
                {/* SecondTask Modal */}
                <SecondTask countrySTATES={Cname(countryCode)} />
              </div>
              <div>
                {/* ThirdTask Modal */}
                <ThirdTask countrySTATES={Cname(countryCode)} />
              </div>
              <div>
                {/* FourthTask Modal */}
                <FourthTask
                  country={this.state.country}
                  countrySTATES={Cname(countryCode)}
                />
              </div>
              <div>
                {/* FifthTask Modal */}
                <FifthTask
                  country={this.state.country}
                  countrySTATES={Cname(countryCode)}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
export default App;
