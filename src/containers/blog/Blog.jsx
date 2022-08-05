import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import courseimg1 from "../../assets/ai1.png"
import './blog.css';

const Blog = () => (
    <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
            <h1 className="gradient__text">Explore crackDSA :)</h1>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 article-css-card'>
                    <Article imgUrl={courseimg1} date="Data Structures & Algorithms" title="Learn Data Structures & Algorithms from Scratch" link="/courses" />

                </div>
                <div className='col-lg-6 col-md-12'>
                    <Article  imgUrl={courseimg1} date="Competitive Programming" title="Master Competitive Programming Concepts" link="/courses" />

                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-md-12 article-css-card'>
                    <Article imgUrl={courseimg1} date="Course of Action" title="Topicwise Guidance Videos" link="/courses" />

                </div>
                <div className='col-lg-6 col-md-12'>
                    <Article imgUrl={courseimg1} date="Methodology to Learn" title="Structured Roadmaps and Strategies" link="/courses" />

                </div>
            </div>
        </div>
    </div>
);

export default Blog;