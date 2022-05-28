import React from 'react';
import {PostsDescription} from '../Blocks/PostsDescription';
import '../Stiles/Main.scss'
export const Blog = () => {
    return (
        <section className="blog">
            <div className='container'>
                <h1 className='caption'>Blog</h1>
                <PostsDescription designe='Web Designe' />
                <div className='solid'></div>
                <PostsDescription designe='Figma, Icon Design' />
                <div className='solid'></div>
                <PostsDescription designe='Web Designe' />
                <div className='solid'></div>
                <PostsDescription designe='Figma, Icon Design' />
                <div className='solid'></div>
            </div>
        </section>
    )
}