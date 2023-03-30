import React from "react";
import { useState } from "react";

const App = (props) => {

  const countries = props.data

  


  const [flag, setFlag] = useState(false);

  const {name , capital} = countries
 
  function handleClick() {
    setFlag(!flag);
  }
  return (
    <div className="main">
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title">
            <div className="title">{name}</div>
            <button className="plus" onClick={handleClick}>
              +
            </button>
          </div>
          <div className={flag ? "active" : "accordion-content"}>{capital}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
