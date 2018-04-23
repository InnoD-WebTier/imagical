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
      <div class='imgContainer'>
        <h1 className="title">CLIENTS</h1>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPy7ZnI46zizXRVoXLbV4Gl6LamFU6g5pqtJj1ijxnO8i-gJWp" width="150" height="150"/>
            </div>
        <div class="imgButton">
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
        </div>
        );
  }
}


