import React from 'react';
import triangleii from '../../images/job/inner-ii.svg';
import './PlayButton.css';

const PlayButton = () => {
  return (
<section>
  <div className='play-button-sec'>
    <div className='play-btn-container'>
    <div className='top-left-icon'></div>
    <div className='bottom-right-icon'></div>
    <div className='play-btn'>
        <button className='play'>Play Now</button>
        <img className='triangle-icon' src={triangleii} alt=''></img>
    </div>
  </div>
</div>
<div className='play-button-sec'>
<div className='play-btn-container'>
  <div className='top-left-icon'></div>
    <div className='bottom-right-icon'></div>
      <div className='play-btn play-btn-ii'>
        <button className='play'>Play Now</button>
        <img src={triangleii} alt=''></img>
      </div>
    </div>
  </div>
</section>
  )
}

export default PlayButton;