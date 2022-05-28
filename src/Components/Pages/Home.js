import React from 'react';
import { FeaturedWorks } from '../FeaturedWorks';
import { MainScrin } from '../MainScrin';
import { Posts } from '../Posts';

export const Home = () => {
    return (
        <div>
            <MainScrin name='John' />
            <Posts />
            <FeaturedWorks />
        </div>
    )
}