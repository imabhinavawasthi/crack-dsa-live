import React from 'react'
import { Footer } from '../../../containers/index.js'
import Navbar from '../../navbar/Navbar.jsx'
import "./soon.css"
const soon = () => {
  return (
    <div>
        <Navbar/>
        <div className='dashb-back-color-css'>
          <div>
            <div style={{color:"white"}} class="wrapper-soon">
              <h1 style={{color:"white"}} class="h1-soon">coming soon<span class="dot">.</span></h1>
              <p style={{color:"white"}} class="p-soon">we are creating amazing content for you!</p>
              <p style={{color:"white"}} class="p-soon" >Wanted to contribute?  <a style={{textDecoration:"none",color:"green"}} href="#">Click Here</a></p>
              {/* <div class="icons-soon">
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-youtube-play"></i></a>
                <a href=""><i class="fa fa-paper-plane"></i></a>
              </div> */}
            </div>
          </div>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default soon