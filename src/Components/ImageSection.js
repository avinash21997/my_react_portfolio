import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Avinash</span></h4>
                <p className="about-text">
                I am a Fullstack Developer and a Competitive Programmer, who loves to transform ideas into reality using code. I'm currently in my pre-final year, pursuing B.Tech in Electronics and Communication Engineering at IIT(ISM) Dhanbad. I like to learn about new technologies, getting indulged into some technology related discusssions or simply play Squash in my free time.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                        <p>University</p>
                        <p>Discipline</p>
                    </div>
                    <div className="right-section">
                        <p>: Avinash</p>
                        <p>: 22</p>
                        <p>: Indian</p>
                        <p>: Hindi, English</p>
                        <p>: Varanasi, Uttar Pradesh, India</p>
                        <p>: India</p>
                        <p>: IIT(ISM) Dhanbad</p>
                        <p>: Electronics and Communication Engineering</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;