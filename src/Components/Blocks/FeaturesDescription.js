import React from 'react';
export const FeaturesDescription = (props) => {
    return (
        <div className='designing'>          
            <img className='image' src={props.pictures} alt='pictures' />                   
            <div className='description'>
                <h1 className='sub_Caption'>{props.captions}</h1>
                <div className='year'>                 
                    <div className='yearCaption'>
                        <p className='text_caption date'>{props.date}</p>
                    </div>                   
                    <p className='grey_text'>{props.subCaption}</p>
                </div>
                <p className='text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
    )
}