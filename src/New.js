import React from "react";
import "./styles.css";
import data from "./data/data3.json";
import NewTasks from "./Components/NewTasks";

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: data
    };
  }

  render() {
    let { check } = this.state;
    let maxPopulations = [];
    let minPopulations = [];

    const values = Object.values(check);
    // console.log("Values::", values[1].population);
    const valSize = values.length;

    //Find HIghest population
    const Max = Math.max(...values.map(item => item.population));

    // find the keys of high and low male populations
    const getMaxKeys = param => {
      for (let i = 0; i < valSize; i++) {
        if (check[i].population === param) {
          // console.log(i);
          maxPopulations.push(i);
          // console.log(maxPopulations);
        }
      }
      return maxPopulations;
    };

    const getMinKeys = param => {
      for (let i = 0; i < valSize; i++) {
        if (check[i].population === param) {
          // console.log(i);
          minPopulations.push(i);
          // console.log(minPopulations);
        }
      }
      return minPopulations;
    };

    //Find Lowest population
    const Min = Math.min(...values.map(item => item.population));
    // console.log("lik", Min);

    // const findObj = param => {
    //   return Object.keys(values).find(key => values[key].population === param);
    // };

    return (
      <div className="container">
        <br />
        <h3>Updates on Populations</h3> <br />
        <div className="row">
          <div className="col-sm-6">
            <div className="card text-white bg-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">Highest Population</h5>
                <p className="card-text">
                  <b>
                    {[
                      getMaxKeys(Max).map(i => {
                        return (
                          <b>
                            <li>{values[i].country}</li>
                          </b>
                        );
                      })
                    ]}
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card text-white bg-warning mb-3">
              <div className="card-body">
                <h5 className="card-title">Lowest Population</h5>
                <p className="card-text">
                  <b>
                    {[
                      getMinKeys(Min).map(i => {
                        return (
                          <b>
                            <li>{values[i].country}</li>
                          </b>
                        );
                      })
                    ]}
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <NewTasks
            country={values}
            value={[...values].map(item => item.populationbygender[0])}
            female={[...values].map(item => item.populationbygender[1])}
          />
        </div>
      </div>
    );
  }
}
export default New;
