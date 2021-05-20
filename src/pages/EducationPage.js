import React from 'react';
import Tittle from '../Components/Tittle';
import about from '../img/about.jpg';

function EducationPage(){
    return(
      <div className="EducationPage">
        <div className="title">
                <Tittle title={'Education'} span={'Education'} />
        </div><br />
        
        <p className="edu">Indian Institute of Technology (ISM) Dhanbad : &nbsp; &nbsp;<div className="date"><p>July:2018 - May:2022</p></div></p>
        <br /><br />
        <p className="dept">B.Tech in Elecronics and Communication Engineering </p>
        <p className="score"> Score : &nbsp;7.49 OGPA </p>
        <br /><br />


        <p className="edu">Mukularanyam English School, Varanasi : &nbsp; &nbsp; &nbsp; &nbsp;<div className="date"><p>April:2015 - April:2017</p></div></p>
        <br /><br />
        <p className="dept">PCM with Information Technology </p>
        <p className="score"> Aggregate Score : &nbsp; 89% </p>
        <br /><br />

        <p className="edu">Divine Sainik School, Varanasi : &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;<div className="date"><p>April:2013 - April:2015</p></div></p>
        <br /><br />
        <p className="dept">Completed my High Schooling </p>
        <p className="score"> CGPA : &nbsp; 9.8 </p>
        <br /><br />


      </div>
    )
}

export default EducationPage;