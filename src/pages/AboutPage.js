import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage(){
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'MongoDB'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'OpenCV'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'C++'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Numpy'} progress={'25%'} width={'25%'} />
                <SkillsSection skill={'Pandas'} progress={'76%'} width={'76%'} />
                <SkillsSection skill={'HTML'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'CSS'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'DS and Algorithms'} progress={'90%'} width={'90%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'I made the various website designs like of SplitzLearn'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'It is one of my favorite domain for the research related stuffs.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'} 
                text={'I like to develop various games like of snake and ladders.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;