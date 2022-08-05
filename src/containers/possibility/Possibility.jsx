import React from 'react';
import { NavLink } from 'react-router-dom';
import possibilityImage from '../../assets/coding.png';
import './possibility.css';

const Possibility = () => (
    <div className="gpt3__possibility section__padding" id="possibility">
        <div className="gpt3__possibility-image">
            <img className='animated-logo-possibility' src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3__possibility-content">
            <h1 className="gradient__text">Avoid rookie mistakes and falling in trap of money-centered courses </h1>
            <p>As a beginner it's easy to fall for courses which provide no value, the web contains more than sufficient information related to every topic, but due to lack of awareness of these resources, we end up wasting money and time and sometimes even learn fallacious information realizing and unlearning which costs even more time.</p>
            <h4>CrackDSA is your saviour! <NavLink to="/courses"><strong>GET STARTED NOW</strong></NavLink></h4>
        </div>
    </div>   
);

export default Possibility;