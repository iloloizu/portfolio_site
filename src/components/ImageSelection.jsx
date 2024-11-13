import React from 'react';
import about from '../images/about.png';
import '../styles/_about.scss'

function ImageSelection() {
    return (
        <div className="ImageSelection"><br/>
            <div className="img">
                <img src={about} alt="Ilolo Izu"/>
            </div>
            <div className="about-info"><br/>
                <h2><span> Ilolo Izu</span>, Software Engineer</h2><br/>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name:</p>
                        <p>Languages:</p>
                        <p>Location:</p>
                    </div>
                    <div className="right-section">
                        <p> Justin Ilolo Izu</p>
                        <p> English, Spanish (Limited Working Proficiency)</p>
                        <p> Dallas, TX, USA</p>
                    </div>
                </div>
                <br/>
                <p className="about-text">
After graduating from Texas A&M in 2019 with a degree in Allied Health and a minor in Business Administration, I initially pursued a medical degree as a Physician Associate, but ultimately realized my true calling was in the exciting world of tech.

During my time at university, I not only excelled in my studies, but I also left my mark on the world of athletics as a Track and Field All-American. Additionally, I made sure to give back to my community through various volunteer organizations.

When I'm not working hard to perfect my programming skills, you can find me indulging in my other creative passions such as photography, traveling, playing video games, or sampling new and exciting culinary experiences. In short, I am a person who never stops exploring and is always on the lookout for my next big adventure. I'm currently a Software Engineer at Vanguard.
                </p> 
                <br/> <a href='https://drive.google.com/file/d/1Y7BxCrw6FkFd4xf-Fd7_gX9bH0dTtiY9/view' target="_blank" rel="noreferrer">
                <button className="btn">Download Résumé</button></a>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    )
}

export default ImageSelection;