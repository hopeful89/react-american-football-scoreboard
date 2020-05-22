import React, { useState } from "react";
import "./App.css";

const BottomRow = (props) => {
  const [quarter, quarterState] = useState(1)
  console.log({props})

  function updateQuarter(){
    (quarter >= 4) ? quarterState(1) : quarterState(quarter + 1)
  }

  // props.setHomeScore(21); these were for test only passing functions as props of app.js
  // props.setAwayScore(21)
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value" onClick={() => updateQuarter()}>{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
