import React from 'react';
import './home.css'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../../containers';
import { CTA, Brand, Navbar } from '../../components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';


const Home = (props) => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar userdata={props.userdata} />
      <div className='container'>
<div className='row'>
<div class="alert alert-info" role="alert">
  We have launched <strong><a href="https://notes.crackdsa.com/" target="_blank">notes.crackdsa.com <FontAwesomeIcon icon={faSquareArrowUpRight}/></a></strong>, you can make DSA notes, save problems and revise concepts using your own dashboard! <strong><a href="https://notes.crackdsa.com/" target="_blank">Check it Now!! <FontAwesomeIcon icon={faRocket} /></a></strong>
</div>
</div>
      </div>
      <Header userdata={props.userdata} />
    </div>
    {/* <Brand /> */}
    {/* <WhatGPT3 /> */}
    <Features />
    <Possibility />

    <Blog />
    <div className='container mb-5'>
      <CTA />
    </div>
    <Footer />
  </div>
);

export default Home;