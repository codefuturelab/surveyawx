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
     { type: "checkbox", name: "spc", title: "Component Özelliklerini seçiniz", isRequired: true, hasNone:  true,
     colCount: 3, choices: ["isRequired", "ReadOnly"] },
     { type: "radiogroup", name: "source", title: "Component Kaynağini seçiniz", isRequired: true, 
     colCount: 0, choices: ["WebService", "DatabaseQuery"] },
     { type: "comment", name: "query", title:"WebService|DatabaseQuery giriniz" }
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
