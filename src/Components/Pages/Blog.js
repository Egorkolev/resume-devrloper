import React from 'react';
import {PostsDescription} from '../Blocks/PostsDescription';
import '../Stiles/Main.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
export const Blog = () => {
    return (
        <section className="blog">
            <Header />
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
            <Footer/>
        </section>
    )
}