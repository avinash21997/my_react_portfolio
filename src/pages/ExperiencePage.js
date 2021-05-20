import React from 'react';
import Tittle from '../Components/Tittle';

let resumeData={
    work: [
        {
           companyName: 'Foxmula-The Smart Way',
           position: 'UI Developer Intern',
           duration: 'Dec 2020 - Jan 2021',
           desc: 'Responsible for the UI Development of given Figma design',
           companyLink: 'https://y.foxmula.com/',
        },
        {
           companyName: 'ACM Student Chapter, IIT(ISM) Dhanbad',
           position: 'Promotion Team Head',
           duration: 'May 2020 - May 2021',
           desc: 'Responsible for the promotion of our college event in the span of country',
           companyLink: 'https://iitism.acm.org/',
        }
    ]
};

function ExperiencePage(){
    return(
        <div className="ExperiencePage">
            <div className="title">
                <Tittle title={'Experience'} span={'Experience'} />
            </div><br /> <br /><br /> <br />
            <p className="company">Foxmula-The Smart Way &nbsp;- <p className="date">Dec 2020 - Jan 2021</p></p>
            <br />
            <p className="profile">Front End UI Developer</p>
             
            <br /> <br /><br /> <br />

            <p className="company">ACM Student Chapter, IIT(ISM) Dhanbad - <p className="date">May 2020 - Present</p></p>
            <br />
            <p className="profile">Promotion Team Head</p>

        </div>
    )
}

export default ExperiencePage;