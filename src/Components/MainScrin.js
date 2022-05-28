import React from 'react';
import './Stiles/Main.scss'
export const MainScrin = (props) => {
    return (
        <section className='mainScrin'>
            <div className='container'>
                <div className='mainContent'>
                    <div className='creativ_technologist'>
                        <h1 className='caption'>Hi, I am {props.name}, Creative Technologist</h1>
                        <a href={require('./cv.Iegor.Koliev.doc')} download={ 'resume' } >
                            <button className='button'>Download Resume</button>
                        </a>
                    </div> 
                    <div className='photo'>
                    <img className='face' src={require("../images/Face.jpg")} alt='face' /> 
                    </div>
                </div>
            </div>
        </section>
    )
}
