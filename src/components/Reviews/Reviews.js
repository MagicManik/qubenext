import React from 'react';
import star from '../../images/job/star.png';
import user from '../../images/job/user.png';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className='reviews-container'>
        <div className='reviews'>
            <div className='review'>
                <div className='user'>
                    <img src={user} alt=''></img>
                    <div className='user-info'>
                        <h6>John Wick</h6>
                        <small>May 18, 2023</small>
                    </div>
                    <div id='star-box'>
                        <img src={star} alt=''></img>
                        <img src={star} alt=''></img>
                        <img src={star} alt=''></img>
                        <img src={star} alt=''></img>
                        <img src={star} alt=''></img>
                    </div>
                    <div className='review-path-ii'></div>
                    <div className='review-path-iii'></div>
                </div>
                <p className='review-text'>
                    <span className='review-underline'></span>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content.</p>
            </div>
        </div>
    </div>
  )
}

export default Reviews;