//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
// import QuarterButton from "./otherButtons";
import "./App.css";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const homeTeam = 'Lions';
  const awayTeam = 'Tigers';
  
  function scoreUpdate(team, amount){
    (team === homeTeam) ? setHomeScore(homeScore + amount): setAwayScore(awayScore + amount) ;
  }


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={ () => scoreUpdate(homeTeam, 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={ () => scoreUpdate(homeTeam, 3) }>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={ () => scoreUpdate(awayTeam, 7) }>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={ () => scoreUpdate(awayTeam, 3) }>Away Field Goal</button>
        </div>
        {/* <QuarterButton /> */}
      </section>
    </div>
  );
}

export default App;
