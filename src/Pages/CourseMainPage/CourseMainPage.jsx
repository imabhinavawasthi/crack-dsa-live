import React from 'react'
import "./coursemainpage.css"
import Soon from '../../components/helpers/comingsoon/soon.jsx'

const CourseMainPage = (props) => {
    return (
        <Soon curruser={props.curruser}/>
        // <div className='container '>
        //     <div className='row'>
        //         <h1>Course Main Page</h1>
        //     </div>
        //     <div className='row course-main-bg-css'>
        //         <div className='col'>
        //             <iframe width="100%"
        //                 height="100%"
        //                 src="https://www.youtube.com/embed/6dooyok2Ac0"
        //                 title="YouTube video player"
        //                 frameborder="0"
        //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //                 allowfullscreen></iframe>
        //         </div>
        //         <div className="col">

        //         </div>
        //     </div>
        // </div>
    )
}

export default CourseMainPage