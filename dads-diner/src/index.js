/*
TODO

any selections, warn on date change
clear if accepting

build json payload to submit
include menu date, submit date, selected items

maybe change where the item id's are found from. i.e. not a seperate dataset

//refactor the code
split out into seperate classes and creat ehelpers where needed

//phase 2 
create backend to pull the data in from (graphql thing)

//phase 3
allow save for later
load saved for later


*/


import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { checkPropTypes } from 'prop-types';

import { Box, Grommet } from 'grommet';

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { registerLocale, setDefaultLocale } from "react-datepicker";
import enGb from 'date-fns/locale/en-GB';

import cx from "classnames";

registerLocale('en-GB', enGb)

function itemData(){
  return [
            {key: 10, name: 'Soup'},
            {key: 20, name: 'Sardines'},
            {key: 30, name: 'Garlic bread'},
            {key: 40, name: 'Battered Cod'},
            {key: 50, name: 'Lasagne'},
            {key: 60, name: 'Burrito'},
            {key: 70, name: 'Bread and butter pudding'},
            {key: 80, name: 'Ice cream'},
            {key: 90, name: 'Jelly'},
            {key: 11, name: 'Prawns and Salmon'},
            {key: 21, name: 'Christmas Soup'},
            {key: 31, name: 'Brandy'},
            {key: 41, name: 'Turkey'},
            {key: 51, name: 'Ham'},
            {key: 61, name: 'Beef'},
            {key: 42, name: 'Chips'},
            {key: 52, name: 'Potato Waffles'},
            {key: 62, name: 'Beans'},
            {key: 43, name: 'Peas'},
            {key: 53, name: 'Green Beans'},
            {key: 63, name: 'Cauliflower'},
            {key: 110, name: 'Long island iced tea'},
            {key: 120, name: 'Juice'},
            {key: 130, name: 'Water'},
            {key: 111, name: 'Brie'},
            {key: 121, name: 'Cheddar'},
            {key: 131, name: 'Edam'},
  ];
}

function getData(){
  
  let data = [
    {
      date: '2020-04-18',
      courses: [
        {
          key: 1000,
          sections: [
            { 
              key: 2000, name: "Starter", 
              required: false,
              minimum: 0,
              maximum: 1,
              items: [
                {key: 10, name: 'Soup'},
                {key: 20, name: 'Sardines'},
                {key: 30, name: 'Garlic bread'},
              ]
            }
          ]
        },
        {
          key: 3000,
          sections: [
            { 
              key: 4000, name: "Mains", 
              required: true,
              minimum: 0,
              maximum: 1,
              items: [
                {key: 40, name: 'Battered Cod'},
                {key: 50, name: 'Lasagne'},
                {key: 60, name: 'Burrito'},
              ]
            },
            { 
              key: 5000, name: "Sides", 
              required: false,
              minimum: 0,
              maximum: 2,
              items: [
                {key: 42, name: 'Chips'},
                {key: 52, name: 'Potato Waffles'},
                {key: 62, name: 'Beans'},
              ]
            },
            { 
              key: 6000, name: "Veggies", 
              required: true,
              minimum: 1,
              maximum: 3,
              items: [
                {key: 43, name: 'Peas'},
                {key: 53, name: 'Green Beans'},
                {key: 63, name: 'Cauliflower'},
              ]
            }
          ]
        },
        {
          key: 7000,
          sections:[
            { 
              key: 8000, name: "Puddings", 
              required: false,
              minimum: 0,
              maximum: 1,
              items: [
                {key: 70, name: 'Bread and butter pudding'},
                {key: 80, name: 'Ice cream'},
                {key: 90, name: 'Jelly'},
              ]
            }
          ]
        }
        ,
        {
          key: 9000,
          sections:[
            { 
              key: 5, name: "Drinks", 
              required: false,
              minimum: 0,
              maximum: 1,
              items: [
                {key: 110, name: 'Long island iced tea'},
                {key: 120, name: 'Juice'},
                {key: 130, name: 'Water'},
              ]
            }
          ]
        },
        {
          key: 10000,
          sections:[
            { 
              key: 11000, name: "Cheeses", 
              required: false,
              minimum: 0,
              maximum: 2,
              items: [
                {key: 111, name: 'Brie'},
                {key: 121, name: 'Cheddar'},
                {key: 131, name: 'Edam'},
              ]
            }
          ]
        }
      ]
    }
  ];

  return data;
}

function Item(props){
  const [isChecked, setChecked] = useState(false);
  return(
    <div className="item-component">
      <span>Item #{props.itemData.key} </span>
      <span>{props.itemData.name}</span>
      <input type="checkbox" 
          checked={isChecked} 
          onChange={
            (event)=>{
              setChecked(!isChecked);
              props.itemChanged(props.itemData.key, !isChecked);
            }
          } 
        ></input>
    </div>
  );
}

function CourseSection(props){

  const [selectedCount, setSelectedCount] = useState(0);
  const [valid, setValidity] = useState(false);

  //do we need effects for these??
  useEffect(() =>{
    validateSelectedCount(selectedCount);
  }, [selectedCount])

  useEffect(() => {
    props.validityChanged(props.item.key, valid);
  }, [valid])

  const setErrors = () => {
    //props.errorsFound(props.item.)
  };

  const validateSelectedCount = (count) => {
    let requiredIsValid = !props.item.required || count > 0;
    let minIsValid = count >= props.item.minimum;
    let maxIsValid = count <= props.item.maximum;
    let isValid = requiredIsValid && minIsValid && maxIsValid;

    setValidity(isValid);
    if(!isValid){
      setErrors()
    }
  }

  const itemChanged = (x, checked) => {
    setSelectedCount(selectedCount + (checked ? 1 : -1));
    props.itemChanged(x, checked);
  }

  const sectionItems = props.item.items.map(
    (i) => <Item 
              key={i.key} 
              itemData={i}
              itemChanged={itemChanged}
              ></Item>);

  return (

    <div className={cx(
        "section-component",{
        "invalid": !valid,
        "valid": valid
        }
      )}
      style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}
    >
      <span>CourseSection #{props.item.key} </span>
      <span className="title">{props.item.name}</span>
      {sectionItems}
      {props.debug && 
        <div className="debug-info">
        <span>DebugInfo:</span>
        <div>Selected items={selectedCount}</div>
        <div>Selection is Valid={valid?"Valid":"NOT Valid"}</div>
        </div>}
    </div>
  );
}

function Course(props){

    const sections = props.courseData.sections.map(
      (i) => <CourseSection
            key={i.key} 
            item={i}
            itemChanged={props.itemChanged}
            validityChanged={props.validityChanged}
            debug={props.debug}
            ></CourseSection>);

return(
    <div className="course-component">
      <span>Course Container #{props.courseData.key}</span>
      <span className="title">{props.courseData.name}</span>
      <Box direction="row" width="large" animation="fadeIn">
        {sections}
      </Box>
    </div>
  );
}

function Menu(props){

  let items = itemData();

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

function App(props){

  const [menuDate, setDate] = useState(Date.now); //ms since 1970-01-01
  const [selectedMenu, setSelectedMenu] = useState(getData()[0]);

  //find closest menu to todays date as default?
  //or say no next menu found?

  function getTicksSince1970(d){
    let date = new Date(d);
    date.setHours(12,0,0,0);
    return date.getTime();
  }

  function findMenuByDate(input){
    return data.find(function(d){
      return getTicksSince1970(d.date) == input;
    })
  }

  const handleDateChanged = (selectedDateString) => {
    let newDate = getTicksSince1970(selectedDateString);
    let foundMenu = findMenuByDate(newDate);
    if(foundMenu){
      setSelectedMenu(foundMenu);
    }
    setDate(newDate);
  }

  let data = getData();

  return(
    <div className="app-component">
      <Box direction="row">

        <DatePicker
            selected={new Date(menuDate)}
            onChange={handleDateChanged}
            dateFormat="yyyy-MM-dd"
            />

        <input type="button" value="Login"></input>

      </Box>
    
      <Menu 
        menuData={selectedMenu}
        debug={props.debug}
      />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App debug={false}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
