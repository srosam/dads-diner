import React, {useState} from 'react';
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
  ];
}

function getData(){
  
  let data = [
    {
      date: '2020-04-18',
      courses: [
        {
          key: 0,
          //name: 'Starter',
          required: false,
          minimum: 0,
          maximum: 1,
          sections: [
            { 
              key: 0, name: "Starter", 
              items: [
                {key: 40, name: 'Battered Cod'},
                {key: 50, name: 'Lasagne'},
                {key: 60, name: 'Burrito'},
              ]
            }
          ]
          // ,
          // items: [
          //   {key: 10, name: 'Soup'},
          //   {key: 20, name: 'Sardines'},
          //   {key: 30, name: 'Garlic bread'},
          // ]
        },
        {
          key: 1,
          //name: 'Main',
          required: true,
          minimum: 1,
          maximum: 1,
          sections: [
            { 
              key: 1, name: "Mains", 
              items: [
                {key: 40, name: 'Battered Cod'},
                {key: 50, name: 'Lasagne'},
                {key: 60, name: 'Burrito'},
              ]
            },
            { 
              key: 2, name: "Sides", 
              items: [
                {key: 42, name: 'Chips'},
                {key: 52, name: 'Potato Waffles'},
                {key: 62, name: 'Beans'},
              ]
            },
            { 
              key: 3, name: "Veggies", 
              items: [
                {key: 43, name: 'Peas'},
                {key: 53, name: 'Green Beans'},
                {key: 63, name: 'Cauliflower'},
              ]
            }
          ]
          // ,
          // items: [
          //   {key: 40, name: 'Battered Cod'},
          //   {key: 50, name: 'Lasagne'},
          //   {key: 60, name: 'Burrito'},
          // ]
        },
        {
          key: 2,
          //name: 'Pudding',
          required: false,
          minimum: 0,
          maximum: 1,
          sections:[
            { 
              key: 1, name: "Puddings", 
              items: [
                {key: 70, name: 'Bread and butter pudding'},
                {key: 80, name: 'Ice cream'},
                {key: 90, name: 'Jelly'},
              ]
            }
          ]
        }
      ]
    },
    {
      date: '2020-04-16',
      courses: [
        {
          key: 0,
          //name: 'Starter',
          required: false,
          minimum: 0,
          maximum: 1,
          sections: [
            { 
              key: 0, name: "aaaaaaaaaaa", 
              items: [
                {key: 40, name: 'hgfhfh Cod'},
                {key: 50, name: 'Lasadfhhgdgne'},
                {key: 60, name: 'Burrdfdhito'},
              ]
            }
          ]
          // ,
          // items: [
          //   {key: 10, name: 'Soup'},
          //   {key: 20, name: 'Sardines'},
          //   {key: 30, name: 'Garlic bread'},
          // ]
        },
        {
          key: 1,
          //name: 'Main',
          required: true,
          minimum: 1,
          maximum: 1,
          sections: [
            { 
              key: 1, name: "dfdhg", 
              items: [
                {key: 40, name: 'dghgd Cod'},
                {key: 50, name: 'Lasadgdhggne'},
                {key: 60, name: 'fddhg'},
              ]
            },
            { 
              key: 2, name: "gfd", 
              items: [
                {key: 42, name: 'dhdhg'},
                {key: 52, name: 'dgfdhg Waffles'},
                {key: 62, name: 'gfdgd'},
              ]
            },
            { 
              key: 3, name: "dd", 
              items: [
                {key: 43, name: 'hh'},
                {key: 53, name: 'gg Beans'},
                {key: 63, name: 'nn'},
              ]
            }
          ]
          // ,
          // items: [
          //   {key: 40, name: 'Battered Cod'},
          //   {key: 50, name: 'Lasagne'},
          //   {key: 60, name: 'Burrito'},
          // ]
        },
        {
          key: 2,
          //name: 'Pudding',
          required: false,
          minimum: 0,
          maximum: 1,
          sections:[
            { 
              key: 1, name: "Puddings", 
              items: [
                {key: 70, name: 'Bread and butter pudding'},
                {key: 80, name: 'Ice cream'},
                {key: 90, name: 'Jelly'},
              ]
            }
          ]
        }
      ]
    },
  ];

  return data;
}

function Item(props){
  const [checked, setChecked] = useState(false);
  return(
    <div className="item-component">
      <span>Item #{props.itemData.key} </span>
      <span>{props.itemData.name}</span>
      <input type="checkbox" 
          checked={checked} 
          onChange={
            (event)=>{
              setChecked(!checked);
              props.itemChecked(props.itemData.key);
            }
          } 
        ></input>
    </div>
  );
}

function CourseSection(props){

  const sectionItems = props.me.items.map(
    (i) => <Item 
              key={i.key} 
              itemData={i}
              itemChecked={props.itemChecked}
              ></Item>);

  return (
    <div className="section-component"
      style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}
    >
      <span>CourseSection #{props.me.key} </span>
      <span className="title">{props.me.name}</span>
      {sectionItems}
  </div>
  );
}

function Course(props){

    const sections = props.courseData.sections.map(
      (i) => <CourseSection
            key={i.key} 
            me={i}
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

  const handleChecked = (key) => {
    if(selectedKeys.includes(key)){
      selectedKeys.splice(selectedKeys.indexOf(key), 1);
      setChecked(selectedKeys => [...selectedKeys]);
    }
    else{
      setChecked(selectedKeys => [...selectedKeys, key]);
    }
  }

  const checkedItems = selectedKeys.map(
    (i) => (
            <div>
              <span 
                key={i} 
                className="spaced-span">
                  { items.find(e => e.key == i).name }
              </span>
              <br/>
            </div>
          )
    );

  const courses = props.menuData.courses.map(
    (i) => <Course 
              key={i.key} 
              courseData={i}
              itemChecked={handleChecked}
              ></Course>);

  return (
    <div className="menu-component">
      <span className="title big-title">Menu for {props.menuData.date}</span>
      {courses}
      <div className="selected-items">
        <span className="title">Selected Menu Items</span><br/>
        {checkedItems}</div>
    </div>
  );
}

function App(props){

  const [menuDate, setDate] = useState(Date.now); //ms since 1970-01-01
  const [selectedMenu, setSelectedMenu] = useState(getData()[0]);

  let data2 = getData()[1];

  function getTicksSince1970(d){
    let date = new Date(d);
    date.setHours(12,0,0,0);
    return date.getTime();
  }

  const handleDateChanged = (x) => {

    let newDate = getTicksSince1970(x);
    
    let foundMenu = data.find(function(d){
      return getTicksSince1970(d.date) == newDate;
    })

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
    
      <Menu menuData={selectedMenu}/>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
