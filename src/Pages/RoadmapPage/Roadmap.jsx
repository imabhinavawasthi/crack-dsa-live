import React from 'react'
import "./roadmap.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../containers/footer/Footer"
import Accordian1 from "../../parts/accordian1/Accordian1"
import TabsApp from "../../parts/tabs/TabsApp"
import Soon from '../../components/helpers/comingsoon/soon.jsx'
const Roadmap = (props) => {
  let curruser = props.userdata;
  return (
    <div>
      <Soon/>
    </div>
  )
}

export default Roadmap