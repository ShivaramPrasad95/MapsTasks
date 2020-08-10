import React from "react";
import "../styles.css";

class NewTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let values = this.props.country.map(item => item);
    let val = this.props.value;
    const valSize = values.length;
    let female = this.props.female;
    let highGender = [];
    let lowGender = [];
    // console.log("momd", valSize);

    //high male population
    let HighGen = Math.max(...val.map(item => item.male));
    // low male populations
    let LowGen = Math.min(...val.map(item => item.male));

    //indexFind
    const check = Object.values(val).map((v, k) => {
      return v.male;
    });

    // find the keys of high and low male populations
    const getLowKeys = param => {
      for (let i = 0; i < valSize; i++) {
        if (check[i] === param) {
          // console.log(i);
          lowGender.push(i);
        }
      }
      return lowGender;
    };

    // find the keys of high and low male populations
    const getHighKeys = param => {
      for (let i = 0; i < valSize; i++) {
        if (check[i] === param) {
          // console.log(i);
          highGender.push(i);
        }
      }
      return highGender;
    };

    //get the ratio of male and female population in each country
    let malePopulation = [...val].map(item => item.male);
    // malePopulation.map(m => {
    //   return console.log(m);
    // });

    let femalePopulation = [...female].map(item => item.female);
    // console.log("female", femalePopulation);

    //function to find the ratio
    const ratio = (malePopulation, femalePopulation) => {
      let male = malePopulation;
      let female = femalePopulation;
      for (var num = female; num > 1; num--) {
        if (male % num === 0 && female % num === 0) {
          male = male / num;
          female = female / num;
        }
      }
      return male + ":" + female;
    };

    // Display the country name with ratio
    const displayRatio = param => {
      return (
        <b>
          {(values[param].populationbygender[0].male ===
            malePopulation[param]) ===
          (values[param].populationbygender[1].female ===
            femalePopulation[param])
            ? values[param].country
            : null}
          <span> </span>
          {ratio(malePopulation[param], femalePopulation[param])}
        </b>
      );
    };

    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card text-white bg-dark mb-3">
              <div className="card-body">
                <h5 className="card-title">Highest Male Population</h5>
                <p className="card-text">
                  <b>
                    {getHighKeys(HighGen).map(i => {
                      return <li>{values[i].country}</li>;
                    })}
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card text-white bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Lowest Male Population</h5>
                <p className="card-text">
                  {getLowKeys(LowGen).map(i => {
                    return (
                      <b>
                        <li>{values[i].country}</li>
                      </b>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card text-white bg-info mb-3">
              <div className="card-body">
                <h5 className="card-title">
                  Ratio of Male & Female Population
                </h5>
                <p className="card-text">
                  {Object.keys(check).map(i => {
                    return <li>{displayRatio(i)}</li>;
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewTasks;
