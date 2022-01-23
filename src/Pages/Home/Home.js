import React from 'react';
import Banner from './Banner/Banner';
import Details from './Details/Details';
import LatestNews from './LatestNews/LatestNews';
import SatisfiedClient from './SatisfiedClient/SatisfiedClient';
import Visiting from './Visiting/Visiting';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Details></Details>
            <LatestNews></LatestNews>
            <SatisfiedClient></SatisfiedClient>
            <Visiting></Visiting>
        </div>
    );
};

export default Home;