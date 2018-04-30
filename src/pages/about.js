import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap'
import teamphoto from '../images/teamphoto.jpg'
import mediaphoto from '../images/mediaplanning.jpg'
import productionphoto from '../images/production.jpg'
import prphoto from '../images/publicrelations.jpg'
import { Image } from 'react-bootstrap';
import Team from '../components/Team';
import '../styles/about.css';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title">About Us</h1>
                <div className="container">
                  <Image src={teamphoto} responsive />
                  <div className="row">
                    <p>
                    imagiCal, established in 1980, is the Berkeley chapter of
                    the American Advertising Federation Our organization
                    functions as a fully student-run advertising agency and
                    creative consultancy comprised of around 30 undergraduates with a diverse array interests, academic fields, and backgrounds. We are researchers, athletes, businesspeople, artists, and more. Many of our alumni graduate to top firms in consulting, banking, and tech industries, as well as to academia, science and advertising. Learn more about our current members here [link to meet the team]
                    </p>
                  </div>
                </div>
                <div className="container">
                <h1 className="title">What We Do</h1>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <span className="column-title-project"></span>Fall Consulting Projects
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                    These are 6-week long management consulting projects for
                    clients of varying backgrounds, from local non-profits to
                    billion dollar corporations. In the past year, we helped
                    an ed-tech startup with their alumni engagement model,
                    rebranded one of China’s largest social media platforms
                    engage with the US audience, and helped a local non-profit
                    craft a business model to best support food insecure students.
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div>
                        <div className="column-title-timeline">
                          <h2>Timeline</h2>
                          <p> October - Mid November</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div>
                        <div className="column-title-timeline">
                          <h2>Timeline</h2>
                          <p> October - Mid November</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div>
                        <div className="column-title-timeline">
                          <h2>Timeline</h2>
                          <p> October - Mid November</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      Fall Consulting Projects
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                    These are 6-week long management consulting projects for
                    clients of varying backgrounds, from local non-profits to
                    billion dollar corporations. In the past year, we helped
                    an ed-tech startup with their alumni engagement model,
                    rebranded one of China’s largest social media platforms
                    engage with the US audience, and helped a local non-profit
                    craft a business model to best support food insecure students.
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div>
                        <div className="column-title-timeline">
                          <h2>Timeline</h2>
                          <p> October - Mid November</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div>
                        <div className="column-title-timeline">
                          <h2>Timeline</h2>
                          <p> October - Mid November</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div>
                        <div className="column-title-timeline">
                          <h2>Timeline</h2>
                          <p> October - Mid November</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="container">
                  <h1 className="title">About Us</h1>
                </div>
                <Team
                  imgSrc={teamphoto}
                  teamname ="Strategy"
                  description = "Gathers and analyzes the primary and secondary market research that is used to determine the campaign’s target market. This department is in charge of creating a single, unified theme and strategy that is applied to all aspects of the marketing campaign."
                  deliverables ={[
                    {
                    deliverable: "Secondary research",
                    },
                    {
                    deliverable: "Primary Research",
                    },
                    {
                    deliverable: "Observational research",
                    },
                    {
                    deliverable: "Research analysis & Summary",
                    },
                    {
                    deliverable: "The Creative Brief",
                    },
                    {
                    deliverable: "Concept-testing of executions",
                    },
                  ]}
                  />
                <Team
                  imgSrc={teamphoto}
                  teamname ="Creative"
                  description = "Crafts, communicates, and guides execution of the campaign’s main idea. Tackles the challenge of articulating the brand or product’s unique value propositions in a way that is relevant, meaningful, and memorable to the consumer."
                  deliverables ={[
                    {
                    deliverable: "Campaign slogan",
                    },
                    {
                    deliverable: "Traditional ads (TV, Radio & Print)",
                    },
                    {
                    deliverable: "Point of sale ads",
                    },
                    {
                    deliverable: "Static out of home ads",
                    },
                    {
                    deliverable: "Digital Ads",
                    },
                    {
                    deliverable: "Social Ads",
                    },
                  ]}
                  />
                <Team
                  imgSrc={prphoto}
                  teamname ="Public Relations"
                  description = "Designs a cohesive public relations initiative that complements and extends the creative campaign by developing community programs, identifying strategic partnerships, and generating campaign awareness through organic media value."
                  deliverables ={[
                    {
                    deliverable: "Interactive out of home ads"
                    },
                    {
                    deliverable: "Experiential ads",
                    },
                    {
                    deliverable: "Strategic partnerships",
                    },
                    {
                    deliverable: "Amplification recommendations",
                    },
                  ]}
                  />
                <Team
                  imgSrc={mediaphoto}
                  teamname ="Media Planning"
                  description = "Develops a multi-million dollar purchasing plan by evaluating and researching the profitability of different media vehicles (i.e. TV, internet, social, etc.). This department creates the most effective strategy of placing ads through competitive benchmarking, consumer trend evaluations, and quantitative market analysis."
                  deliverables ={[
                    {
                    deliverable: "Media consideration set",
                    },
                    {
                    deliverable: "Tailored media funnel",
                    },
                    {
                    deliverable: "Media strategy per execution",
                    },
                    {
                    deliverable: "Media flighting table",
                    },
                    {
                    deliverable: "Budget allocation per execution",
                    },
                    {
                    deliverable: "Optimization recommendations",
                    },
                  ]}
                  />
                <Team
                  imgSrc={productionphoto}
                  teamname ="Production"
                  description = "Develops a multi-million dollar purchasing plan by evaluating and researching the profitability of different media vehicles (i.e. TV, internet, social, etc.). This department creates the most effective strategy of placing ads through competitive benchmarking, consumer trend evaluations, and quantitative market analysis."
                  deliverables ={[
                    {
                    deliverable: "The plansbook",
                    },
                    {
                    deliverable: "Presentation deck",
                    },
                    {
                    deliverable: "Recorded and edited video ads",
                    },
                    {
                    deliverable: "Digital & Social execution mockups",
                    },
                    {
                    deliverable: "Printed physical execution props",
                    },
                  ]}
                  />
            </div>
        );
    }
}
