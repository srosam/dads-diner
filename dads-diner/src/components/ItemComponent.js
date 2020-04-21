import React, {useState} from 'react';
import "./Item.css"

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

export default Item;