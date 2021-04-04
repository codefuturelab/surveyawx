import React, { Component } from "react";


import * as Survey from "survey-react";
import "survey-react/modern.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
    constructor() {
        super();
        
    }


    onComplete(survey, options) {
        //Write survey results into database
        console.log("Survey results: " + JSON.stringify(survey.data));
        window.location.href = "";
      }

    render() {
        

        

        const json =  { questions: [
     {name:"name", type:"text", title: "Component İsmi:", placeHolder:"Component adini giriniz", isRequired: true, autoComplete: "name"},
     { type: "dropdown", name: "type", title: "Component tipini seçiniz", isRequired: true, colCount: 0,
     choices: ["Text", "Dropdown", "Radio"] },
     { type: "radiogroup", name: "spc", title: "Component Özelliklerini seçiniz", isRequired: true, 
     colCount: 4, choices: ["isRequired", "notRequired"] },
     { type: "radiogroup", name: "spc2", title: "Component Özelliklerini seçiniz", isRequired: true, 
     colCount: 3, choices: ["ReadOnly", "notReadOnly"] }
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

export default SurveyComponent;
