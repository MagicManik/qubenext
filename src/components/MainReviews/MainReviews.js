import React from 'react';
import arrow from '../../images/job/arrow.png';
import dislike from '../../images/job/dislike.png';
import like from '../../images/job/like.png';
import path from '../../images/job/path.png';
import starii from '../../images/job/star-ii.png';
import star from '../../images/job/star.png';
import user from '../../images/job/user-ii.png';
import './MainReviews.css';

const MainReviews = () => {
  return (
    <section className='main-reviews-container'>
        <div className='main-reviews'>
            <div className='main-review'>
                <div className='main-user'>
                    <img src={user} alt=''></img>
                    <div className='main-user-info'>
                        <h6>Emma Wilson</h6>
                        <small>2 hours ago</small>
                    </div>
                    <div id='main-star-box'>
                        <img src={star} alt=''></img>
                        <img src={star} alt=''></img>
                        <img src={star} alt=''></img>
                        <img src={star} alt=''></img>
                        <img src={starii} alt=''></img>
                    </div>
                    <div className='main-review-path'></div>
                    <div className='main-review-path-ii'></div>
                    <div className='main-review-path-iii'></div>
                </div>
                <div className='main-review-text'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true  generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    <span className='main-review-underline'></span>
                    <div className='review-footer'>
                        <div>
                            <img src={like} alt=''></img> <span>1.2K</span> 
                            <img className='dislike' src={dislike} alt=''></img>
                        </div>
                        <div>
                            <img src={arrow} alt=''></img> <span>29 Reply</span>
                            <img className='replay' src={path} alt=''></img> <span>Reply</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainReviews;