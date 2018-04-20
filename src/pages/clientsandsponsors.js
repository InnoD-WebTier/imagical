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


