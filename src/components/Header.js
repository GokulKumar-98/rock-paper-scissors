import React, { useContext, useState } from 'react';
import { scoreContext } from '../App';
import '../styles/header.css';

function Header() {
  const context = useContext(scoreContext);
  console.log(context);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  context.add = increment;
  return (
    <div className="head_title">
      <div className="header">
        ROCK
        <br />
        PAPPER
        <br />
        SCISSORS
        <br />
      </div>
      <div className="Score Card">
        <div className="sc_title">Score</div>
        <div className="count" onClick={increment}>
          {count}
        </div>
      </div>
    </div>
  );
}

export default Header;
