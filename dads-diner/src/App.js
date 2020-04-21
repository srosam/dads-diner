
import React, {useState, useEffect} from 'react';
import './index.css';

import { Box } from 'grommet';

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { registerLocale, setDefaultLocale } from "react-datepicker";
import enGb from 'date-fns/locale/en-GB';

import Menu from "./components/MenuComponent";

import FakeData from "./data/hardcodedData";

registerLocale('en-GB', enGb)

function App(props){
  
    const [menuDate, setDate] = useState(Date.now); //ms since 1970-01-01
    const [selectedMenu, setSelectedMenu] = useState();
  
    let data = FakeData.getData();
  
    useEffect(() =>{
      console.log(selectedMenu);
    }, [selectedMenu])
  
    useEffect(() =>{
      let foundMenu = findMenuByDate(menuDate);
      if(foundMenu){
        setSelectedMenu(foundMenu);
      }
    }, [menuDate])
  
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
      setDate(newDate);
    }
  
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
      
      {(selectedMenu === undefined) && <div>SELECT A DATE (18th April 2020)</div>}
      {selectedMenu && 
  
        <Menu 
          menuData={selectedMenu}
          debug={props.debug}
        /> 
      }
      </div>
    );
  }

  export default App;