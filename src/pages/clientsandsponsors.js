import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import '../styles/index.css'
 
const image = '../images/MissionU.png'


export default class LightboxClient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <h1 className="title">CLIENTS</h1>
        <button type='button' onClick={() => this.setState({ isOpen: true})}>
          MissionU
        </button>
        <h1 className="title">SPONSORS</h1>
        <div className="body__text_container">
            <p className="body__text">Everything you see from imagiCal is a result of our perseverance and willingness to spend the time and effort to maximize our wealth and produce the best campaign that we can. While other NSAC teams may have a class or resources dedicated to the competition, imagiCal is 100% student-run and relies completely on donor support to fund our presentation materials and campaign needs. We have a proven track record of attracting the best and brightest to our organization, and as you can see from our accomplishments to the left, we take pride in creating nationally recognized work. Please refer to our sponsorship packet [link] to understand what we can provide for you and contact us at&nbsp; 
            <a href="mailto:contact@calaaf.com" className="body__link">contact@calaaf.com</a>
            &nbsp;if you are interested in learning more. We are also very willing to accomodate custom sponsorship packages.</p>
            <a className="button" href="">Be Our Sponsor</a>
        </div>

        {isOpen &&
          <Lightbox
            mainSrc = {image}
            onCloseRequest = {() => this.setState({ isOpen: false })}
            />
          }
        </div>
        );
  }
}


