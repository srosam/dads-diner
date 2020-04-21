import React, {useState, useEffect} from 'react';
import cx from "classnames";
import Item from "./ItemComponent";
import "./CourseSection.css"

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

  export default CourseSection;