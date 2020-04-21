import React, {useState, useEffect} from 'react';
import cx from "classnames";

import Course from "./CourseComponent";

import FakeData from "../data/hardcodedData";
import "./Menu.css"

function Menu(props){

    const [selectedKeys, setChecked] = useState([]);
    const [sectionValidity, setSectionValidity] = useState([]);
    const [valid, setValidity] = useState(false);
    const [sectionIssues, setSectionIssues] = useState([]);
  
    useEffect(() =>{
      //console.log("Valid");
    }, [valid === true])
  
    const handleChangd = (key, checked) => {
  
      if(!checked){ //remove it
        selectedKeys.splice(selectedKeys.indexOf(key), 1);
        setChecked(selectedKeys => [...selectedKeys]);
      }
      else{ //add it
        setChecked(selectedKeys => [...selectedKeys, key]);
      }
    }
  
    const determineSectionIssues = (sectionKey, isValid) => {
  
      console.log(sectionKey);
    
      let sectionIssuesIndex = sectionIssues.indexOf(sectionIssues
        .find(i => i.sectionKey === sectionKey));
  
      if(isValid) { //remove issues from list
  
        sectionIssues.splice(sectionIssuesIndex, 1);
        setSectionIssues(setSectionIssues => [...sectionIssues]);
  
      }
      else{
        //let invalidSection = sectionValidity.find(i => i.sectionKey === sectionKey)
  
        //one way to do this is to dig into the data and find the relevant constraints
  
        let foundCourse = props.menuData.courses.find(
                (c) => c.sections.find((s) => s.key == sectionKey));
  
        let foundSection = foundCourse.sections.find(
                  (s) => s.key == sectionKey);
  
        let issuesText = foundSection.name 
                      + " must have between " 
                      + foundSection.minimum 
                      + " and " 
                      + foundSection.maximum 
                      + " selections";
      
        //find the item we want to alter
        // let index = sectionIssues.indexOf(sectionIssues
        //   .find(i => i.sectionKey === sectionKey));
  
        //if its not present, add it.
        //if it is, remove it and add in a replacement
        if(sectionIssuesIndex < 0){
          setSectionIssues(sectionIssues => 
              [...sectionIssues, { sectionKey: sectionKey, issues: issuesText}]);
        }else{
          sectionIssues.splice(sectionIssuesIndex, 1, 
              { sectionKey: sectionKey, issues: issuesText});
        }
      }
    }
  
    const handleValidityChanged = (sectionKey, isValid) => {
  
      //find the item we want to alter
      let sectionKeyIndex = sectionValidity.indexOf(sectionValidity
                              .find(i => i.sectionKey === sectionKey));
      
      //if its not present, add it.
      //if it is, remove it and add in a replacement
      if(sectionKeyIndex < 0){
        setSectionValidity(sectionValidity => 
            [...sectionValidity, { sectionKey: sectionKey, valid: isValid}]);
      }else{
        sectionValidity.splice(sectionKeyIndex, 1, 
            { sectionKey: sectionKey, valid: isValid});
      }
  
      let allValid = sectionValidity.find(v => v.valid === false) === undefined; //not found
      setValidity(allValid);
  
      determineSectionIssues(sectionKey, isValid);
  
    }
  
    let items = FakeData.itemData();
    const checkedItems = selectedKeys.map(
      (i) => (
              <div
                  key={i} 
                  className="spaced-span">
                    { items.find(e => e.key === i).name }
                <br/>
              </div>
            )
      );
  
    const courses = props.menuData.courses.map(
      (i) => <Course 
                key={i.key} 
                courseData={i}
                itemChanged={handleChangd}
                validityChanged={handleValidityChanged}
                debug={props.debug}
                ></Course>);
  
    return (
      <div className="menu-component">
        <span className="title big-title">Menu for {props.menuData.date}</span>
        <div>{courses}</div>
        <div>        
          <input type="button" value="Submit Choices" disabled={!valid} className={cx("app-button", {"green": valid})} />
          {!valid && 
          <div className="error-info">
            <div>Ensure all sections are green</div>
            {sectionIssues.map((i) => {return <div key={i.sectionKey}>{i.issues}</div>})}
          </div>}
        </div>
  
        <div className="selected-items">
          <span className="title">Selected Menu Items</span><br/>
          {checkedItems}</div>
  
          {props.debug && 
          <div className="debug-info">
          <span>DebugInfo:</span>
          <div>Menu selections are Valid={valid?"Valid":"NOT Valid"}</div>
          </div>}
      </div>
    );
  }

  export default Menu;