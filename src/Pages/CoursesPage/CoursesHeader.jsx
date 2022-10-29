import React from "react";
import ai from "../../assets/coursespic.png";
import Article from "../../components/article/Article"
import "./coursesheader.css";
import Blog from "../../containers/blog/Blog"
import courseimg1 from "../../assets/ai1.png"
import TabsApp from "../../parts/tabs/TabsApp"
import { useNavigate } from 'react-router';
import {
    NavLink
} from "react-router-dom";
const CoursesHeader = (props) => {
    const navigate = useNavigate();
    const curruser = props.userdata;
    return (
        <div>
            <div className="gpt3__header section__padding" id="home">
                <div className="gpt3__header-content">
                    <h1 className="gradient__text">
                        Courses
                    </h1>
                    <p>
                        We have organised the best content for you with proper guidance and
                        mentorship.
                    </p>

                    <div className="gpt3__header-content__input">
                        {/* <input type="email" placeholder="Your Email Address" /> */}
                        <a className="gpt3__header-content__input" href="#courseslist"><button type="button">Explore Courses</button></a>
                    </div>

                </div>

                <div className="gpt3__header-image-courses animated-header-image">
                    <img src={ai} />
                </div>
            </div>
            <div className="container" id="courseslist">
                <div className="row">
                    <div className="gpt3__blog-heading">
                        <h1 className="gradient__text">Explore crackDSA :)</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 article-css-card'>
                        <Article imgUrl={courseimg1} date="Data Structures & Algorithms" title="Learn Data Structures & Algorithms from Scratch" link="/course/dsa" />

                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <Article imgUrl={courseimg1} date="Competitive Programming" title="Master Competitive Programming Concepts" link="/course/cp" />

                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 article-css-card'>
                        <Article imgUrl={courseimg1} date="Course of Action" title="Topicwise Guidance Videos" link="/course/guidance" />

                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <Article imgUrl={courseimg1} date="Methodology to Learn" title="Structured Roadmaps and Strategies" link="/course/roadmap" />

                    </div>
                </div>
                {/* <div className="row">
                    <TabsApp tabs={[
                        {
                            id: 1,
                            tabTitle: 'DSA',
                            title: 'Title 1',
                            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
                        },
                        {
                            id: 2,
                            tabTitle: 'Competitive Programming',
                            title: 'Title 2',
                            content: 'Contenido de tab 2.'
                        },
                        {
                            id: 3,
                            tabTitle: 'Web Development',
                            title: 'Title 3',
                            content: 'Contenido de tab 3.'
                        },
                        {
                            id: 4,
                            tabTitle: 'Blockchain',
                            title: 'Title 4',
                            content: 'Contenido de tab 4.'
                        }
                    ]} />
                </div> */}
            </div>
        </div>
    );
};

export default CoursesHeader;
