import React from 'react';

import img from '../assets/flat.jpg';

const OneCard: React.FC = () => (
  <div className="card card-word">
    <img className="card-word-img" src={img} alt="aaa" />
    <div className="card-price">
      <p className="text text-title">255.6</p>
      <p className="text text-title">Poland</p>
    </div>
    <div className="card-description">
      <p className="text text-title">Sound file</p>
      <p className="text text-title">Image</p>
      <button className="button button-card card-word__change">Change</button>
    </div>
  </div>
);

export default OneCard;
