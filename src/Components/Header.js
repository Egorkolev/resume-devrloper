import React from 'react';
import { Link } from 'react-router-dom';
import './Stiles/Main.scss'
export const Header = () => {
    return (
        <div className="header">
            <div className='home'>
                <Link to='/Home' className="navLink">Home</Link>
            </div>
            <ul className="navBar">
                <li className="navList">
                    <Link to='/blog' className="navLink">Blog</Link>
                </li>
                <li className="navList">
                    <Link to='/works' className="navLink">Works</Link>
                </li>
                <li className="navList">
                    <Link to='/contact' className="navLink">Contact</Link>
                </li>
            </ul>
        </div>
    )
}