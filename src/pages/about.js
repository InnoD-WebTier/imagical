import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap'
import teamphoto from '../images/teamphoto.jpg'
import { Image } from 'react-bootstrap';

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
                        <h2>Timeline</h2>
                        <p> October - Mid November</p>
                      </div>
                    </div>
                    <div className="row">
                      <div>
                        <h2>Timeline</h2>
                        <p> October - Mid November</p>
                      </div>
                    </div>
                    <div className="row">
                      <div>
                        <h2>Timeline</h2>
                        <p> October - Mid November</p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="container">
                  HIHIHIHIHIHIHI
                </div>
            </div>
        );
    }
}
