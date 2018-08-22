import React from 'react'
import Link from 'gatsby-link'
import teamphoto from '../images/teamphoto.jpg'
import mediaphoto from '../images/mediaplanning.jpg'
import productionphoto from '../images/production.jpg'
import creativephoto from '../images/creative.jpg'
import strategyphoto from '../images/strategy.jpg'
import prphoto from '../images/publicrelations.jpg'
import { Image } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import Team from '../components/Team';
import '../styles/about.css';
import '../styles/index.css';

export default class About extends React.Component {

    render() {
        let strategyDelibs =[{ deliverable: "Secondary research",},{ deliverable: "Primary Research",},{ deliverable: "Observational research",},{ deliverable: "Research analysis & Summary", }, { deliverable: "The Creative Brief", },{ deliverable: "Concept-testing of executions",}, ];
        let creativeDelibs =[{deliverable: "Campaign slogan",},{deliverable: "Traditional ads (TV, Radio & Print)",},{deliverable: "Point of sale ads",},{deliverable: "Static out of home ads",},{deliverable: "Digital Ads",},{deliverable: "Social Ads",},];
        let prDelibs = [{deliverable: "Interactive out of home ads"},{deliverable: "Experiential ads",},{deliverable: "Strategic partnerships",},{deliverable: "Amplification recommendations",},];
        let mediaDelibs = [{deliverable: "Media consideration set",},{deliverable: "Tailored media funnel",},{deliverable: "Media strategy per execution",},{deliverable: "Media flighting table",},{deliverable: "Budget allocation per execution",},{deliverable: "Optimization recommendations",},];
        let productionDelibs = [{deliverable: "The plansbook",},{deliverable: "Presentation deck",},{deliverable: "Recorded and edited video ads",},{deliverable: "Digital & Social execution mockups",},{deliverable: "Printed physical execution props",},];
        return (
            <div className="container--spacing">
                <h1 className="title">ABOUT US</h1>
                <div className="container">
                  <div className="container--img-sizing">
                    <Image src={teamphoto} responsive />
                  </div>
                  <div className="row">
                    <div className="container--intro">
                      <p className="intro--history">
                      imagiCal, established in 1980, is the Berkeley chapter of
                      the American Advertising Federation Our organization
                      functions as a fully student-run advertising agency and
                      creative consultancy comprised of 25-30 undergraduates with a diverse array of interests, academic fields, and backgrounds. We are researchers, athletes, businesspeople, artists, and more. Many of our alumni graduate to top firms in consulting, banking, and tech industries, as well as to academia, science and advertising. Learn more about our current members here [link to meet the team]
                      </p>
                  </div>
                  </div>
                </div>
                <div className="container">
                <h1 className="title title--custom">WHAT WE DO</h1>
                </div>
                <div className="container imagical-projects--spacing">
                  <div className="row">
                    <div className="col--custom">
                      <div className="column-title-project">
                        <h1>Fall Consulting Projects</h1>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col--custom">
                    These are 6-week long management consulting projects for
                    clients of varying backgrounds, from local non-profits to
                    billion dollar corporations. In the past year, we helped
                    an ed-tech startup with their alumni engagement model,
                    rebranded one of China’s largest social media platforms
                    engage with the US audience, and helped a local non-profit
                    craft a business model to best support food insecure students.
                  </div>
                  <div className="col--timeline imagical-copy--styling">
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
                          <h2>Key deliverables</h2>
                          <p>Midterm & final presentation</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div>
                        <div className="column-title-timeline">
                          <h2>Who</h2>
                          <p> Diverse selection of members</p>
                          <p> 2 Project Managers, 5-6 Consultants</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col--custom">
                      <div className="column-title-project">
                        <h1>The National Student Advertising Competition</h1>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col--custom">
                      imagiCal is the only student organization at Berkeley that competes
                      in the National Student Advertising Competition (NSAC) every year,
                      which is the main reason why we only recruit members once a year in
                      the fall. NSAC is the premier college advertising competition that
                      provides more than 2,000 college students the real-world experience
                      of creating a strategic advertising/marketing campaign for a corporate
                      client. Students develop a marketing plan and then pitch their work to
                      advertising professionals at the district, semi-final and national levels.
                      Learn more about the AAF by visiting their website!
                  </div>
                  <div className="col--timeline imagical-copy--styling">
                    <div className="row">
                      <div>
                        <div className="column-title-timeline">
                          <h2>Timeline</h2>
                          <p>Mid November - Mid April (extends to
                              early June if we make it to Nationals!)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div>
                        <div className="column-title-timeline">
                          <h2>Key Deliverables</h2>
                          <p>Plansbook, Regionals presentation, Semifinals phone call, National presentation</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div>
                        <div className="column-title-timeline">
                          <h2>Who</h2>
                          <p>
                           All 30 students working together to closely resemble a
                           real-world advertising agency with 5 core teams:
                           Strategy, Creative, PR, Media & Production.
                           </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="container imagical-copy--styling">
                  <h1 className="title title--custom"> HOW WE DO IT</h1>
                  <ul className="nav justify-content-center">
                    <li className="btn-custom">
                        <a className="button active" data-toggle="tab" href="#panel11" role="tab">Strategy</a>
                    </li>
                    <li className="btn-custom">
                        <a className="button" data-toggle="tab" href="#panel12" role="tab">Creative</a>
                    </li>
                    <li className="btn-custom">
                        <a className="button" data-toggle="tab" href="#panel13" role="tab">Public Relations</a>
                    </li>
                    <li className="btn-custom">
                        <a className="button" data-toggle="tab" href="#panel14" role="tab">Media Planning</a>
                    </li>
                    <li className="btn-custom">
                        <a className="button" data-toggle="tab" href="#panel15" role="tab">Production</a>
                    </li>
                  </ul>
                </div>
              <div className="custom-content">
                  <div className="custom-tab-pane fade in show active" id="panel11" role="tabpanel">
                    <Team
                      imgSrc={strategyphoto}
                      teamname ="Strategy"
                      description = "Gathers and analyzes the primary and secondary market research that is used to determine the campaign’s target market. This department is in charge of creating a single, unified theme and strategy that is applied to all aspects of the marketing campaign."
                      deliverables ={strategyDelibs}
                      />
                  </div>
                  <div className="custom-tab-pane fade" id="panel12" role="tabpanel">
                    <Team
                      imgSrc={creativephoto}
                      teamname ="Creative"
                      description = "Crafts, communicates, and guides execution of the campaign’s main idea. Tackles the challenge of articulating the brand or product’s unique value propositions in a way that is relevant, meaningful, and memorable to the consumer."
                      deliverables ={creativeDelibs}
                      />
                  </div>
                  <div className="custom-tab-pane fade" id="panel13" role="tabpanel">
                    <Team
                      imgSrc={prphoto}
                      teamname ="Public Relations"
                      description = "Designs a cohesive public relations initiative that complements and extends the creative campaign by developing community programs, identifying strategic partnerships, and generating campaign awareness through organic media value."
                      deliverables ={prDelibs}
                      />
                  </div>
                  <div className="custom-tab-pane fade" id="panel14" role="tabpanel">
                    <Team
                      imgSrc={mediaphoto}
                      teamname ="Media Planning"
                      description = "Develops a multi-million dollar purchasing plan by evaluating and researching the profitability of different media vehicles (i.e. TV, internet, social, etc.). This department creates the most effective strategy of placing ads through competitive benchmarking, consumer trend evaluations, and quantitative market analysis."
                      deliverables ={mediaDelibs}
                      />
                  </div>
                  <div className="custom-tab-pane fade" id="panel15" role="tabpanel">
                    <Team
                      imgSrc={productionphoto}
                      teamname ="Production"
                      description = "Develops a multi-million dollar purchasing plan by evaluating and researching the profitability of different media vehicles (i.e. TV, internet, social, etc.). This department creates the most effective strategy of placing ads through competitive benchmarking, consumer trend evaluations, and quantitative market analysis."
                      deliverables ={productionDelibs}
                      />
                  </div>
              </div>
            </div>
        );
    }
}
