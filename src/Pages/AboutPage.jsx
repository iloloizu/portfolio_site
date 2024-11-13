import React from 'react'
import Title from '../components/Title'
import ImageSelection from '../components/ImageSelection'
import ServicesSection from '../components/ServicesSection'
// import SkillsSection from '../components/SkillsSection'
import leadership from '../images/Leadershipweb.png'
import photography from '../images/Photography.jpg'
import webdesign from '../images/WebDesign.JPG'
import track from '../images/trackweb.png'
import Resilia from '../images/Resilia.JPG'
import vanguard_track from '../images/vanguard_track.jpg'

import { faReact, faPython, faVuejs, faHtml5, faCss3, faSass, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons'

export default function AboutPage() {

  const resilia = Resilia

  return (
    <div>
      <Title title={'About Me'} span={'About Me'}/>
      
      <ImageSelection />
            {/* <Title title={'My Skills'} span={'My Skills'} /> */}
            {/* <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'85%'} length={'85%'}/>
                <SkillsSection skill={'Ruby'} progress={'60%'} length={'60%'}/>
                <SkillsSection skill={'ReactJS'} progress={'75%'} length={'75%'} icon={faReact} />
                <SkillsSection skill={'Github'} progress={'80%'} length={'80%'} icon={faGithub} />
                <SkillsSection skill={'Bootstrap'} progress={'75%'} length={'75%'} icon={faBootstrap} />
                <SkillsSection skill={'ThreeJS'} progress={'45%'} length={'45%'}/>
                <SkillsSection skill={'Material UI'} progress={'75%'} length={'75%'}/>
                <SkillsSection skill={'Vue.js'} progress={'75%'} length={'75%'} icon={faVuejs} />
                <SkillsSection skill={'Python'} progress={'30%'} length={'30%'} icon={faPython} />
                <SkillsSection skill={'CSS'} progress={'80%'} length={'80%'} icon={faCss3} />
                <SkillsSection skill={'HTML'} progress={'90%'} length={'90%'} icon={faHtml5} />
                <SkillsSection skill={'Sass'} progress={'90%'} length={'90%'} icon={faSass} />
                <SkillsSection skill={'Object Oriented Programming'} progress={'60%'} length={'60%'} />
                <SkillsSection skill={'Data Structures & Algorithms'} progress={'50%'} length={'50%'}/>
                <SkillsSection skill={'SQLite'} progress={'40%'} length={'40%'} />
                <SkillsSection skill={'Adobe Photoshop'} progress={'80%'} length={'80%'} />
                <SkillsSection skill={'Adobe Premier Pro'} progress={'90%'} length={'90%'} />
                <SkillsSection skill={'State Managment'} progress={'70%'} length={'70%'} />
                <SkillsSection skill={'Willingness to Learn'} progress={'100%'} length={'100%'} />
                <SkillsSection skill={'Coachable'} progress={'100%'} length={'100%'} />
                <SkillsSection skill={'Leadership'} progress={'100%'} length={'100%'} />
            </div> */}

            <Title title={'Traits'} span={'Traits'} />
            <div className="servives-container">
            <hr/>
            <ServicesSection image={resilia} title={'Professional Experience'} text={`During my time at RippleMatch, I worked as a Full-Stack Software Engineer primarily with Vue.js, Python, Jest, and SQLAlchemy. I worked with key stake holders and Senior Engineers in an Agile Environment to build scalable features from concept to implementation. I also gave a live demo presentation to the entire company. 
                I also have experience working as a Software Engineer I at Resilia. You can find more in my resume linked above. `} /> 
                <hr/>
                <ServicesSection image={webdesign} title={'Web Design'} alt="Ilolo studying at Flatiron School"
                text={`In November of 2021 I took a leap of faith and enrolled Software Engineering Bootcamp—and I've yet to look back. Flatiron School is a Full-stack web development in Ruby on Rails, JavaScript (ES6), React, Redux, HTML5, CSS3, API Development, Authentication and Authorization, Object-Oriented Programming, SQL, Sinatra, ActiveRecord, JSON.`}
                /> <hr/>
                <ServicesSection image={vanguard_track} title={'Camaraderie & Teamwork'} alt="Ilolo and Coworkers at Penn Relays in 2024" text={`Throughout my journey in both tech and athletics, I've found that teamwork and camaraderie are at the core of success. Competing in track and field taught me the power of shared goals and the impact of a supportive environment. This experience translates into my professional life, where I actively foster inclusive spaces. I founded the Black at Resilia Employee Resource Group and am a proud member of Vanguard's BOLD ERG, working to uplift and empower my colleagues. Whether collaborating on code or racing at the Penn Relays, I am committed to learning, growing, and achieving alongside my team.`} /> 
                <hr/>
                <ServicesSection image={leadership} title={'Leadership & Service'} alt="Ilolo receiving the Distinguished Letterman's Award" 
                text={'In 2019, I received the Distinguished Letterman Award from Texas A&M University. It is the highest award presented to a student-athlete by the athletics department. The individual is someone who displays extraordinary talents in the areas of athletics, scholarship, leadership, and service.'}
                /> <hr/>
                <ServicesSection image={photography} title={'Photograpy & Videography'} alt="Ilolo taking pictures from a helicopter in NYC"
                text={'My experience working with videography dates back 15+ years when I would create my own home films with Windows Movie Maker. I have over 10 years of experience with iMovie and began transitioning to the Adobe Ecosystem within the past 6+ years. Videography is my original passion. I love been able to implement creativity from this side of myself to the world of Web Design.'}
                /> <hr/>
                <ServicesSection image={track} title={'Determination & Grit'} alt="Ilolo winning Texas Relays in the 400 meter hurdles"
                text={'World Record and American Record Holder in Indoor 4x400 Meter Relay. Managed a full academic course load (15+ hours), in addition to nearly 30-40 hours per week of practice, team meetings, track meets, and travel. Developed leadership as a team captain; teamwork by working and listening to those in the same environment; and resilience, by working day-to-day for a goal years ahead.'}
                /> <hr/>

            </div>
    </div>
  )
}
