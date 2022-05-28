import React from 'react';
import '../Stiles/Main.scss'
export const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className='designing'>                          
                    <div className='description'>
                        <h1 className='caption'>Designing Dashboards with usability in mind</h1>
                        <div className='year'>                 
                            <div className='yearCaption'>
                                <p className='text_caption date'>2018</p>
                            </div>                   
                            <p className='grey_text'>Dashboard, User Experience Design</p>
                        </div>
                        <p className='text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <img className='reactAngle' src={require('../../images/Rectangle4.jpg')} alt='reactAngle' />
                <h2 className='sub_Caption'>My Own Designe</h2>
                <img className='reactAngle' src={require('../../images/Rectangle5.jpg')} alt='reactAngle' />
                <img className='reactAngle' src={require('../../images/Rectangle6.jpg')} alt='reactAngle' />
            </div>
        </section>
    )
}