import React from 'react';
import { FeaturedWorks } from '../FeaturedWorks';
import { MainScrin } from '../MainScrin';
import { Posts } from '../Posts';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Home = () => {
    return (
        <div>
            <Header />
            <MainScrin name='John' />
            <Posts />
            <FeaturedWorks />
            <Footer />
        </div>
    )
}