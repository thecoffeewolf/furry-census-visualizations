import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {VerticalBarSeries, XYPlot, XAxis, YAxis} from 'react-vis';

class App extends Component {
  render() {
    let genderSpeciesData = require('./genderful-species-2016.json');
    let ageData = this.getCount(genderSpeciesData);
    let xyFormattedData = [];
    
    let keys =  Object.keys(ageData);

    for(let i = 0; i < keys.length; i++){
      xyFormattedData.push({x: keys[i], y: ageData[keys[i]]});
    }

    let x = <div>
              <p align="left">Responses to Age</p>
                <XYPlot height={500} width={1000} xDomain={[0, 100]} yDomain={[0, 500]}>
                  <VerticalBarSeries data={xyFormattedData} />        
                  <XAxis title="Age" />
                  <YAxis title="Count"/>
                </XYPlot>
           </div>;

    return (
      <div className="App">
      {x}
      </div>
    );
  }

  getCount(jsonData) {
    let result = {};
    for(let i = 0; i < jsonData.length; i++){
      let age = jsonData[i].Age;
      if(result[age]){
        result[age] =  result[age]+1;
      }
      else{
        result[age] =  1;
      }
    }
    return result;
  }

  onClick(event){
    console.log("wao");
  }
}

export default App;