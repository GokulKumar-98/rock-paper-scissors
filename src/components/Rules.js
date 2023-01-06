import React, { useState } from 'react';
import '../styles/rules.css';
import iconclose from '../images/icon-close.svg';
import imgrules from '../images/image-rules.svg';
function Rules() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div className="rule">
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="ruleArranger">
              <p>RULES</p>
              <img src={iconclose} alt="" onClick={handleClose}></img>
            </div>
            <img src={imgrules} alt=""></img>
          </div>
        </div>
      )}
      <button className="bottom-right bn3" onClick={handleClick}>
        RULES
      </button>
      {/* <button className="bottom-right" onClick={handleClick}>
        Show Modal
      </button> */}
    </div>
  );
}

export default Rules;
