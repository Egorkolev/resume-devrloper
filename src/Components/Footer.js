import React from 'react';
import './Stiles/Main.scss'

export const Footer = () => {
    return (
        <section className='footer'>
            <div className='container'>
                <div className='social'>
                    <ul className='socialUl'>
                        <li className='socialLi'>
                            <a href='/#'><img src={require('../images/facebook.png')} alt='face' /></a>
                        </li>
                        <li className='socialLi'>
                            <a href='/#'><img src={require('../images/instagram.png')} alt='face' /></a>
                        </li>
                        <li className='socialLi'>
                            <a href='/#'><img src={require('../images/linkedin.png')} alt='face' /></a>
                        </li>
                        <li className='socialLi'>
                            <a href='/#'><img src={require('../images/twitter.png')} alt='face' /></a>
                        </li>
                    </ul>
                    <p className='text footerText'>Copyright ©2020 All rights reserved </p>
                </div>
            </div>
        </section>
    )
}