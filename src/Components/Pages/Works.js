import React from 'react';
import { FeaturesDescription } from '../Blocks/FeaturesDescription';
import { Header } from '../Header';
import { Footer } from '../Footer';
import '../Stiles/Main.scss';

export const Works = () => {
    return (
        <section className="works">
            <Header />
            <div className="container">
            <h1 className='caption'>Works</h1>
                <FeaturesDescription 
                    pictures={require('../../images/photo1.jpg')} 
                    captions='Vibrant Portraits of 2020' 
                    date='2020' 
                    subCaption='Dashboard'
                />
                <div className='solid'></div>
                <FeaturesDescription 
                    pictures={require('../../images/photo2.jpg')} 
                    captions='Designing Dashboards' 
                    date='2021' 
                    subCaption='Illustration'
                />
                <div className='solid'></div> 
                <FeaturesDescription 
                    pictures={require('../../images/photo3.jpg')} 
                    captions='36 Days of Malayalam type' 
                    date='2019' 
                    subCaption='Typography'
                />
                <div className='solid'></div>
                <FeaturesDescription 
                    pictures={require('../../images/photo4.jpg')} 
                    captions='My Own Work Designe' 
                    date='2018' 
                    subCaption='Type'
                />
                <div className='solid'></div>
            </div>
            <Footer />
        </section>
    )
}