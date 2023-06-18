import React from 'react';
import MainReviews from '../../components/MainReviews/MainReviews';
import PlayButton from '../../components/PlayButton/PlayButton';
import Reviews from '../../components/Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <main className='main'>
            <div className='wrapper'>
                <section className='first-section'>
                    <PlayButton/>
                    <Reviews/>
                </section>
                <MainReviews/>
            </div>
        </main>
    );
};

export default Home;