import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import MoreQuestion from '../MoreQuestion/MoreQuestion';
import MoreFeatures from '../MoreFeature/MoreFeatures';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const games = useLoaderData();
    
    return (
        <div  className='bg-[#080325] z-1  max-w-md lg:max-w-6xl mx-auto'>
        
            <Banner></Banner>
            <MoreFeatures></MoreFeatures>
            <Cards games={games}></Cards>

            <MoreQuestion></MoreQuestion>
        </div>
    );
};

export default Home;