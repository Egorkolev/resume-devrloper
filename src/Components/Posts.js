import React from 'react';
import './Stiles/Main.scss';
import {PostsDescription} from './Blocks/PostsDescription';
import { Link } from 'react-router-dom';
export const Posts = () => {
    return (
        <section className='posts'>
            <div className='container'>
                <div className='post_caption'>
                    <p className='text_caption'>Recent posts</p>
                    <Link className='text_caption link' to='/blog'>View all</Link>
                </div>
                <div className='postTitle'>
                    <PostsDescription designe='Web Designe' />
                    <PostsDescription designe='Figma, Icon Design' />
                </div>
            </div>
        </section>
    )
}