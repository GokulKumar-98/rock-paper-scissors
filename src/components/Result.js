import React, { useContext } from 'react';
import '../styles/result.css';
import rock from '../images/ylrock.png';
import paper from '../images/blpaper.png';
import scissors from '../images/pkscissors.png';
import { scoreContext } from '../App';

const imgs = {
  rock: <img src={rock} alt="" />,
  paper: <img src={paper} alt="" />,
  scissors: <img src={scissors} alt="" />,
};

const Result = ({ values, bt }) => {
  const vv = useContext(scoreContext);
  if (values.result == 'win') {
    vv.points += 1;
    vv.add();
  }
  console.log(vv);
  return (
    <div className={`Result box ${values.visible}`}>
      <div className="item1">{imgs[values.choice]}</div>
      <div className="item2">{imgs[values.compChoice]}</div>
      <div className="break"></div>
      <div className="res1">
        <div className="rest">
          Result: {values.result}
          <button onClick={bt}>Play Again</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
