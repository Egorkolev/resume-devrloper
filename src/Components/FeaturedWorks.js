import React from 'react';
import './Stiles/Main.scss'
import { FeaturesDescription } from './Blocks/FeaturesDescription';
export const FeaturedWorks = () => {
    return (
        <section className='featuredWorks'>
            <div className='container'>
                <h2 className='text_caption'>Featured works</h2>
                <FeaturesDescription 
                    pictures={require('../images/photo1.jpg')} 
                    captions='Vibrant Portraits of 2020' 
                    date='2020' 
                    subCaption='Dashboard'
                />
                <div className='solid'></div>
                <FeaturesDescription 
                    pictures={require('../images/photo2.jpg')} 
                    captions='Designing Dashboards' 
                    date='2021' 
                    subCaption='Illustration'
                />
                <div className='solid'></div> 
                <FeaturesDescription 
                    pictures={require('../images/photo3.jpg')} 
                    captions='36 Days of Malayalam type' 
                    date='2019' 
                    subCaption='Typography'
                />
                <div className='solid'></div>
            </div>
        </section>
    )
}