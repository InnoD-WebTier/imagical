import React from 'react';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="container">
              <div className="row">
                <div className="col">
                <h2>{this.props.title}</h2>
                </div>
              </div>
              <div className="row">
              </div>
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
