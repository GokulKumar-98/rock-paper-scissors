import React, { useContext, useEffect, useState, useRef } from 'react';
import '../styles/result.css';
import rock from '../images/ylrock.png';
import paper from '../images/blpaper.png';
import scissors from '../images/pkscissors.png';
import { scoreContext } from '../App';

const imgs = {
  rock: <img className="imgs" src={rock} alt="" />,
  paper: <img className="imgs" src={paper} alt="" />,
  scissors: <img className="imgs" src={scissors} alt="" />,
};

const Result = ({ values, reset }) => {
  const vv = useContext(scoreContext);
  console.log(values);
  if (values.result == 'win') {
    vv.points += 1;
    vv.add();
  }

  const circleanim = () => {
    if (values.result == 'win') {
      return (
        <>
          <div className="item1 winr flip-in-hor-bottom">
            <div className="textHolder">
              <div className="inr ">{imgs[values.choice]}</div>
              <div className="pctext">You Picked</div>
            </div>

            <div className="holdci">
              <div className="circles">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
              </div>
            </div>
          </div>
          <div className="item2 flip-in-hor-bottom">
            <div className="textHolder">
              {imgs[values.compChoice]}
              <div className="pctext">House Picked</div>
            </div>
          </div>
        </>
      );
    } else if (values.result == 'lose') {
      return (
        <>
          <>
            <div className="item1 flip-in-hor-bottom">
              <div className="textHolder">
                {imgs[values.choice]}
                <div className="pctext">You Picked</div>
              </div>
            </div>

            <div className="item2 winr flip-in-hor-bottom">
              <div className="textHolder">
                <div className="inr ">{imgs[values.compChoice]}</div>
                <div className="pctext">House Picked</div>
              </div>
              <div className="holdci">
                <div className="circles">
                  <div className="circle1"></div>
                  <div className="circle2"></div>
                  <div className="circle3"></div>
                </div>
              </div>
            </div>
          </>
        </>
      );
    }
    return (
      <>
        {' '}
        <div className="item1 flip-in-hor-bottom">
          <div className="textHolder">
            {imgs[values.choice]}
            <div className="pctext">You Picked</div>
          </div>
        </div>{' '}
        <div className="item2 flip-in-hor-bottom">
          <div className="textHolder">
            {imgs[values.compChoice]} <div className="pctext">House Picked</div>
          </div>{' '}
        </div>
      </>
    );
  };

  //console.log(vv);

  const handleClick = (e) => {
    e.preventDefault();
    reset();
  };

  return (
    <div className={`Result box ${values.visible}`}>
      {circleanim()}
      {/* <div className="item1">{imgs[values.choice]}</div>
      <div className="item2">{imgs[values.compChoice]}</div> */}
      <div className="break"></div>
      <div className="res1">
        <div
          className={`rest ${values.visible ? 'fadeout ' : 'swing-in-top-fwd'}`}
        >
          {values.result == 'win'
            ? 'YOU WIN'
            : values.result == 'lose'
            ? 'YOU LOSE'
            : 'DRAW'}
          <a href="/" className="bhyp">
            <button className="bn54" onClick={handleClick}>
              <span className="bn54span">Play Again</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Result;
