import React, { useState } from 'react';
import './App.css';

function App() {
  const [screen, setScreen] = useState('home');
  const [intake, setIntake] = useState(0);
  const [goal, setGoal] = useState(2000);
  const [list, setList] = useState([]);

  const add = (ml) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setList([{ id: Date.now(), ml, time }, ...list]);
    setIntake((prev) => Math.min(prev + ml, goal));
  };

  const remove = () => setIntake((prev) => Math.max(prev - 250, 0));
  const increaseGoal = () => setGoal((prev) => prev + 100);
  const decreaseGoal = () => setGoal((prev) => (prev > 100 ? prev - 100 : 100));

  const progress = Math.min((intake / goal) * 100, 100).toFixed(0);

  return (
    <div className="main">
      {screen === 'home' && (
        <>
          <h1>Hydro Daily</h1>
          <p>Track your daily hydration</p>
          <div className="box">
            <div className="row"><span>Progress</span><span>{progress}%</span></div>
            <div className="bar"><div className="fill" style={{ width: `${progress}%` }}></div></div>
            <div className="row"><span>0 ml</span><span>{goal} ml</span></div>
          </div>
          <div className="drop">💧</div>
          <h2>{intake} ml</h2>
          <p>of {goal} ml</p>
          <div className="btns">
            <button onClick={remove}>-</button>
            <button onClick={() => add(250)}>+</button>
          </div>
          <div className="goal">
            <p>Daily Goal</p>
            <p>{goal} ml</p>
            <button onClick={decreaseGoal}>-</button>
            <button onClick={increaseGoal}>+</button>
          </div>
        </>
      )}

      {screen === 'track' && (
        <>
          <h1>Track Intake</h1>
          <p>Log your water</p>
          <div className="buttons">
            <button onClick={() => add(150)}>Small Glass<br /><span>150 ml</span></button>
            <button onClick={() => add(250)}>Regular Glass<br /><span>250 ml</span></button>
            <button onClick={() => add(350)}>Large Glass<br /><span>350 ml</span></button>
            <button onClick={() => add(500)}>Bottle<br /><span>500 ml</span></button>
            <button onClick={() => add(750)}>Big Bottle<br /><span>750 ml</span></button>
            <button className="full">Custom Amount</button>
          </div>
          <h2>Entries</h2>
          {list.length === 0 ? <p>No entries yet</p> : (
            <ul>{list.map((item) => (
              <li key={item.id}>{item.ml} ml at {item.time}</li>
            ))}</ul>
          )}
        </>
      )}

      <div className="nav">
        <button className={screen === 'home' ? 'active' : ''} onClick={() => setScreen('home')}>Home</button>
        <button className={screen === 'track' ? 'active' : ''} onClick={() => setScreen('track')}>Track</button>
        <button>Reminders</button>
        <button>Stats</button>
      </div>
    </div>
  );
}

export default App;
