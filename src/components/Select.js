import React, { useState } from 'react';
import tri from '../images/bg-triangle.svg';
import rockg from '../images/ylrock.png';
import paperg from '../images/blpaper.png';
import scissorsg from '../images/pkscissors.png';
import '../styles/select.css';
import Result from './Result';

const imgs = [
  <img className="rock" src={rockg} alt=""></img>,
  <img className="paper" src={paperg} alt=""></img>,
  <img className="scissors" src={scissorsg} alt=""></img>,
];

const Select = () => {
  const [show, setShow] = useState({
    visible: 'hide',
    choice: '',
  });

  const onclick = (e) => {
    if (e.target.className == 'triangle') return;

    const randomNumber = Math.floor(Math.random() * 3);
    let compChoice = null;
    if (randomNumber === 0) {
      compChoice = 'rock';
    } else if (randomNumber === 1) {
      compChoice = 'paper';
    } else {
      compChoice = 'scissors';
    }
    let result = null;
    let choice = e.target.className;
    if (choice === compChoice) {
      result = 'draw';
    } else if (
      (choice === 'rock' && compChoice === 'scissors') ||
      (choice === 'paper' && compChoice === 'rock') ||
      (choice === 'scissors' && compChoice === 'paper')
    ) {
      result = 'win';
    } else {
      result = 'lose';
    }

    setShow({
      visible: '',
      choice: e.target.className,
      compChoice: compChoice,
      result: result,
    });
  };

  const reset = (setShowResult) => {
    setShow({
      choice: '',
      visible: 'hide',
    });
  };

  return (
    <div className="selector">
      <div className={`arranger ${show.visible == 'hide' ? '' : 'hide'}`}>
        <div onClick={onclick}>
          {imgs.map((el, i) => (
            <span className="allimgs" key={i}>
              {el}
            </span>
          ))}
        </div>
        <img className="triangle" src={tri} alt=""></img>
      </div>
      <Result values={show} reset={reset}></Result>
    </div>
  );
};

export default Select;
