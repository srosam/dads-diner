import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { checkPropTypes } from 'prop-types';

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
            {key: 61, name: 'Beef'}
  ];
}

function getData(index){
  

  let data = [
    {
      date: '2001-12-22',
      courses: [
        {
          key: 0,
          name: 'Starter',
          required: false,
          minimum: 0,
          maximum: 1,
          items: [
            {key: 10, name: 'Soup'},
            {key: 20, name: 'Sardines'},
            {key: 30, name: 'Garlic bread'},
          ]
        },
        {
          key: 1,
          name: 'Main',
          required: true,
          minimum: 1,
          maximum: 1,
          items: [
            {key: 40, name: 'Battered Cod'},
            {key: 50, name: 'Lasagne'},
            {key: 60, name: 'Burrito'},
          ]
        },
        {
          key: 2,
          name: 'Pudding',
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
    },
    {
      date: '2001-12-25',
      courses: [
        {
          key: 0,
          name: 'Starter',
          required: false,
          minimum: 0,
          maximum: 1,
          items: [
            {key: 11, name: 'Prawns and Salmon'},
            {key: 21, name: 'Christmas Soup'},
            {key: 31, name: 'Brandy'},
          ]
        },
        {
          key: 1,
          name: 'Main',
          required: true,
          minimum: 1,
          maximum: 1,
          items: [
            {key: 41, name: 'Turkey'},
            {key: 51, name: 'Ham'},
            {key: 61, name: 'Beef'},
          ]
        },
        {
          key: 2,
          name: 'Pudding',
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
  ];

  return data[index];
}

function Item(props){
  const [checked, setChecked] = useState(false);
  return(
    <div className="item-component">
      <span>{props.itemData.key} - </span>
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

function Course(props){

  const courseItems = props.courseData.items.map(
    (i) => <Item 
              key={i.key} 
              itemData={i}
              itemChecked={props.itemChecked}
              ></Item>);

  return(
    <div className="course-component">
      <span>{props.courseData.key} - </span>
      <span className="title">{props.courseData.name}</span>
      {courseItems}
    </div>
  );
}

function Menu(props){

  let data = getData(0);
  let items = itemData();

  const [checked, setChecked] = useState([]);
  const [name, setName] = useState("Robert");

  const handleChecked = (key) => {
    if(checked.includes(key)){
      checked.splice(checked.indexOf(key), 1);
      setChecked(checked => [...checked]);
    }
    else{
      setChecked(checked => [...checked, key]);
    }
  }

  const checkedItems = checked.map(
    (i) => (<div><span 
              key={i} 
              className="spaced-span">
                { items.find(e => e.key == i).name }
              </span>
              <br/>
              </div>
          )
    );

  const courses = data.courses.map(
    (i) => <Course 
              key={i.key} 
              courseData={i}
              itemChecked={handleChecked}
              ></Course>);

  return (
    <div className="menu-component">
      <span className="title big-title">Menu for {data.date}</span>
      {courses}
      <div className="selected-items">
        <span className="title">Selected Menu Items</span><br/>
        {checkedItems}</div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
