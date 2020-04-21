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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './App'

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
