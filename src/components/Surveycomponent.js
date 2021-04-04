import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";




Survey.StylesManager.applyTheme("modern");


class Surveycomponent extends Component {
    constructor() {
        super();
        
    }

    onComplete(survey, options) {
      //Write survey results into database
      console.log("Survey results: " + JSON.stringify(survey.data));
      window.location.href = "";
    }
      
    render() {
        

 const json = { elements: [
  {
    type: "dropdown",
    name: "country",
    title: "Select the country...",
    isRequired: true,
    choicesByUrl: {
      url: "https://restcountries.eu/rest/v2/all",
      valueName: "name"
    }
  },
  {
    type: "panel",
    name: "panel_countriesByRegion",
    title: "Show countries by region",
    elements: [{
    type: "dropdown",
    name: "region",
    title: "Select the region...",
    choices: ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  }, {
    type: "dropdown",
    name: "reg_country",
    title: "Select the country...",
    isRequired: true,
    choicesByUrl: {
      url: "https://restcountries.eu/rest/v2/region/{region}",
      valueName: "name"
    }
  }]
  }
]};
const survey = new Survey.Model(json);
survey.showCompletedPage=false


        

        return (
            <Survey.Survey
                model={survey}  
                onComplete={this.onComplete}
                
            />
        );
    }
}

export default Surveycomponent;
