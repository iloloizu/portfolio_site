import React from 'react'
import ServicesSection from '../components/ServicesSection';
import Title from '../components/Title';
import Resilia from '../images/Resilia.JPG'
import Ripple from '../images/Ripple.JPG'
import Vanguard_Bold from '../images/bold_vangaurd.JPG'

function ExperiencePage() {
const rippleMatch = Ripple
const resilia = Resilia
                
  return (
    <>
        <div className="experience_page_title">
            <Title title={'Professional Experience'} span={'Professional'} />
        </div>
        <div className='experiencePage'>
            <ServicesSection image={Vanguard_Bold} title={'Vanguard - 2023 to Present'} text={`Vanguard is one of the world's largest investment companies, offering a large selection of low-cost mutual funds, ETFs, advice, and related services.`} />
            <div className="row">
                <div className="col">
                    <ul>
                        <li className='li_included'>Application Engineer working in Angular JS, Fastify, RxJS, and NgRx. Building Angular web applications and Restful micro-services hosted on the AWS cloud.</li>
                        <li className='li_included'>Modernized the Buy/Sell Landing Page, enhancing user navigation and transaction efficiency.</li>
                        <li className='li_included'>Implemented Automated Investing Plans, optimizing user investment processes and streamlining client interactions.</li>
                        <li className='li_included'>Contributed to the development of the New Investor IRA Experience, which drove $250M in investments and resulted in a 4% increase in overall investment rates and a 22% adoption rate of Target Retirement Funds (TRFs) by new clients.</li>
                        <li className='li_included'>Led the resolution of Quick Ticket tooltip issues, improving system reliability and reducing reported user errors by 15%.</li>
                        <li className='li_included'>Optimized Order Validation for Quick Ticket and AIP ETF pages, increasing validation accuracy by 20% and reducing processing times for efficient order handling.</li>
                        <li className='li_included'>Enhanced accessibility on the New IRA Page, improving compliance from 85% to 95% and ensuring inclusivity in alignment with WCAG standards.</li>
                        <li className='li_included'>Actively contributed to PagerDuty on-call rotations, reducing MTTR by 10% through timely incident response, and improving overall system reliability.</li>
                        <li className='li_included'>Consistently received outstanding performance reviews for timely project deliveries, innovation, and impactful contributions to key client-facing features.</li>
                    </ul>
                </div>
            </div>

            <ServicesSection image={resilia} title={'Resilia - 2023'} text={`Resilia is a technology platform with a human touch. Resilia enables nonprofits to increase capacity and funders to go beyond the grant with technical assistance, coaching, and capacity-building support.`} />
            <div className="row">
                <div className="col">
                    <ul>
                        <li className='li_included'>Worked as a Full-Stack Software Engineer I with: Typescript, node, GraphQL APIs, ReactJS, Material UI design
components, cloud-based platforms (Stripe, Auth0, Mailgun, Contentful, etc.), Heroku infrastructure, AWS infrastructure</li>
                        <li className='li_included'>Software development experience with proficiency in frontend and backend frameworks/languages, testing practices and frameworks, API design and implementation, and database design and migrations
                            Collaborated with Product and Design teams to understand and solve core problems faced by nonprofit users</li>
                        <li className='li_included'>Built end-to-end technology solutions with hands-on experience in UX, API, and DB layers</li>
                        <li className='li_included'>Navigated codebase to identify patterns and antipatterns for building new product features</li>
                        <li className='li_included'>Elevated risks and unknowns with proposed tools and technologies to make informed decisions with Engineering, Product, and Design teams</li>
                        <li className='li_included'>Directly impacted nonprofit users by enabling seamless utilization of Resilia's platform and helping nonprofits strengthen operations, scale impact, and communicate work</li>
                        <li className='li_included'>Early and crucial contributor to growing Engineering team, reporting to the Director of Engineering</li>
                    </ul>
                </div>
            </div>
            <ServicesSection image={rippleMatch} title={'RippleMatch - 2022'} text={`RippleMatch is the recruitment automation platform changing how Gen Z finds work. By replacing job boards with matching and automation, RippleMatch eliminates the most time-intensive parts of the recruitment process for both employers and job seekers. Leading employers such as Amazon, eBay, and Teach For America leverage RippleMatch to build diverse, high-performing teams and Gen Z job seekers across the country trust RippleMatch to launch and grow their careers.`} />
            <div className="row">
                <div className="col">
                    <ul>
                        <li className='li_included'>Worked as a Full-Stack Software Engineer primarily with Vue.js, Python, Jest, and SQLAlchemy</li>
                        <li className='li_included'>Worked with key stakeholders and Senior Engineers in an Agile Environment: from story grooming sessions to a live demo presentation to the entire company</li>
                        <li className='li_included'>Built scalable features from concept to implementation.Worked on projects dealing with state management.</li>
                        <li className='li_included'>Created improvements to the recruiter analytics by adding filtering options. This included displaying the currently applied filters, assisting with accessibility</li>
                        <li className='li_included'>Implemented a third-party API that allows recruiters to tag each other, thus being notified by email</li>
                        <li className='li_included'>Worked on limiting the number of candidates tracked by email links within 6 months positively affecting load performance when viewing analytics as a recruiter</li>
                        <li className='li_included'>Implemented and constructed my own UI/UX feature to help display appropriate ‘pill-button’ sizing throughout the site.</li>
                        <li className='li_included'>Experience writing unit tests for Frontend and Backend tickets.</li>
                        <li className='li_included'>Part of the event planning committee to help foster interpersonal and collaborative skills throughout the engineering dept.</li> 
                    </ul>
                </div>
            </div>
            <a href='https://drive.google.com/file/d/1Y7BxCrw6FkFd4xf-Fd7_gX9bH0dTtiY9/view' target="_blank" rel="noreferrer">
                <button className="btn">Download Résumé</button>
            </a>
        </div>
    </>
  )
}

export default ExperiencePage;