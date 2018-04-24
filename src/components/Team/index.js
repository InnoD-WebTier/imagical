import React from 'react';
import 'bootstrap'
import { Image } from 'react-bootstrap';

export default class Team extends React.Component {
    render() {
      const deliverables = this.props.deliverables.map((deli, key) =>(
      <li key={key}>{deli.deliverable}</li>
      ));
        return (
          <div className="container">
            <Image src={this.props.imgSrc} responsive />
            <div className="row">
              <div className="col-6">
                <div>
                    <h2>{this.props.teamname}</h2>
                    <p>{this.props.description}</p>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <h2>Key Deliverables</h2>
                  <p>{this.props.description}</p>
                    {deliverables}
                </div>
              </div>
            </div>
          </div>
        )
    }
}
