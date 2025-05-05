import React, { useState } from 'react';
import './App.css';

function App() {
  const [intake, setIntake] = useState(0);
  const [goal, setGoal] = useState(2000);

  const add = () => setIntake(Math.min(intake + 250, goal));
  const remove = () => setIntake(Math.max(intake - 250, 0));
  const increaseGoal = () => setGoal(goal + 100);
  const decreaseGoal = () => setGoal(goal > 100 ? goal - 100 : 100);

  const progress = Math.min((intake / goal) * 100, 100).toFixed(0);

  return (
    <div className="app">
      <h1>Hydro Daily</h1>
      <p>Track your daily hydration</p>

      <div className="box">
        <div className="row">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="bar">
          <div className="fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="row">
          <span>0 ml</span>
          <span>{goal} ml</span>
        </div>
      </div>

      <h2>{intake} ml</h2>
      <p>of {goal} ml</p>

      <div className="btns">
        <button onClick={remove}>-</button>
        <button onClick={add}>+</button>
      </div>

      <div className="goal">
        <p>Daily Goal</p>
        <p>{goal} ml</p>
        <button onClick={decreaseGoal}>-</button>
        <button onClick={increaseGoal}>+</button>
      </div>
    </div>
  );
}

export default App;


















