import React from 'react';
import Img from 'gatsby-image';

export default class Member extends React.Component {
  render() {
    return (
      <div className="member">
        <Img resolutions={this.props.image} />
        <div className="member__overlay">
          <div className="member__overlay-text">
            <h4 className="member__name">{this.props.name.toUpperCase()}</h4>
            <h4 className="member__position">{this.props.position}</h4>
          </div>
        </div>
      </div>
    )
  }
}

