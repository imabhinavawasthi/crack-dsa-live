import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
    {
        title: 'Filtered Quality Content',
        text: ' Best articles and videos on the topic straight out of the information hyperspace. Saves beginners from falling into the courses trap and doing rookie mistakes.',
    },
    {
        title: 'Must Do Problems',
        text: ' Learning DSA without practice has no meaning. Keeping that in mind we have provided the must-do problems.',
    },
    {
        title: 'Guidance Video',
        text: 'Not only the content has been provided but also a guidance video at the end of each topic has been provided to maximise your learnings in the right direction.',
    },
];

const Features = () => (
    <div className="gpt3__features section__padding" id="features">
        <div className="gpt3__features-heading">
            <h1 className="gradient__text">Competitive Programming can not be mugged up, it is to be practiced.</h1>
            <p>Get Started With CrackDSA</p>
        </div>
        <div className="gpt3__features-container">
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
    </div>
);

export default Features;