import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {HorizontalBarSeries, VerticalBarSeries, XAxis, YAxis, XYPlot} from 'react-vis';

class App extends Component {
  render() {
    let genderSpeciesData = require('./genderful-species-2016.json');

    let ageData = this.getCount(genderSpeciesData, "Age");
    
    let ageChart = <div>
              <p align="left">Responses to Age</p>
                <XYPlot height={500} width={1000} xDomain={[0, 100]} yDomain={[0, 500]}>
                  <VerticalBarSeries data={ageData} />        
                  <XAxis title="Age" />
                  <YAxis title="Count"/>
                </XYPlot>
           </div>;

    let gaData = this.getCount(genderSpeciesData, "Gender Alignment");
        
    let gaChart = <div>
        <p align="left">Responses to Gender Alignment</p>
          <XYPlot height={500} width={500} yDomain={[0, 5000]} xType={'ordinal'}>
            <VerticalBarSeries data={gaData} />        
            <XAxis title= "Gender Alignment" />
            <YAxis title="Count"/>
          </XYPlot>
        </div>;

    let giData = this.getCount(genderSpeciesData, "Gender Identity");
    
    let giChart = <div>
        <p align="left">Responses to Gender Alignment</p>
          <XYPlot height={500} width={800} yDomain={[0, 5000]} xType={'ordinal'}>
            <VerticalBarSeries data={giData} />        
            <XAxis title= "Gender Identity" />
            <YAxis title="Count"/>
          </XYPlot>
        </div>;


    let speciesData = this.getCount(genderSpeciesData, "Main Species", true);
        
    let speciesChart = <div>
        <p align="left">Species</p>
          <XYPlot height={1000} width={2000}  yType={'ordinal'}>
            <HorizontalBarSeries data={speciesData} />        
            <YAxis title= "Species" />
            <XAxis title="Count"/>
          </XYPlot>
        </div>;

    return (
      <div className="App">
      <p>Uncorrelated 2016 Charts</p>
        {ageChart}
        {gaChart}
        {giChart}
        {speciesChart}
      </div>
    );
  }

  getCount(jsonData, field, keyIsY) {
    let result = {};
    for(let i = 0; i < jsonData.length; i++){
      let token = jsonData[i][field];
      
      if(result[token]){
        result[token] =  result[token]+1;
      }
      else{
        result[token] =  1;
      }
    }

    let xyFormattedData = [];    
    let yxFormattedData = [];    
    
    let keys =  Object.keys(result);

    for(let i = 0; i < keys.length; i++){
      xyFormattedData.push({x: keys[i], y: result[keys[i]]});
      yxFormattedData.push({y: keys[i], x: result[keys[i]]});
    }

    if(keyIsY){
      return yxFormattedData;
    }
    else{
      return xyFormattedData;
    }
  }

  onClick(event){
    console.log("wao");
  }
}

export default App;