import React from 'react';
import Tittle from '../Components/Tittle';

const ListTitleStyle={ fontWeight:700, color: '#9B1FE8', marginBottom: '4px' }
const programmingLanguages=
<ul>
    <li style={ ListTitleStyle }>Programming Languages</li><br />
    <li>C++</li>
    <li>C</li>
    <li>Javascript</li>
    <li>Python</li>
</ul>
const databases=
<ul>
    <li style={ ListTitleStyle }>DataBases</li><br />
    <li>MySQL</li>
    <li>MongoDB</li>
    <li>FireBase</li>
</ul>
const webdevelopment=
<ul>
    <li style={ ListTitleStyle }>Web Development</li><br />
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>JQuery</li>
    <li>ReactJS</li>
    <li>Node.js</li>
</ul>
const machinelearning=
<ul>
    <li style={ ListTitleStyle }>Machine Learning</li><br />
    <li>Numpy</li>
    <li>Pandas</li>
    <li>OpenCV</li>
</ul>
const deeplearning=
<ul>
    <li style={ ListTitleStyle }>Deep Learning</li><br />
    <li>PyTorch</li>
    <li>Keras</li>
</ul>
const others=
<ul>
    <li style={ ListTitleStyle }>Others</li><br />
    <li>Git</li>
    <li>Postman</li>
</ul>

const totalSkills=[programmingLanguages, databases, webdevelopment, machinelearning, deeplearning, others]

function SkillsPage(){
    return(
        <div className="SkillsPage">
            <div className="title">
                <Tittle title={'Skills'} span={'Skills'} />
            </div><br /> <br />
            <div class="text">
                <p>
                    I'm a life long learner and enjoy learning new stuffs !
                    Below are some programming languages, toolkits, frameworks
                    and libraries that I worked with and like.
                    Some of them I control better than others.
                </p><br />
            </div>
            <div className="Container">
                {totalSkills.map(skills =>{
                    return(
                        <div className="List">
                            {skills}

                        </div>    
                    )
                })}
            </div>
            

        </div>
    )
}

export default SkillsPage;