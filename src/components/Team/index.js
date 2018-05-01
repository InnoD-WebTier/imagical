import React from 'react';
import 'bootstrap'
import { Image } from 'react-bootstrap';

export default class Team extends React.Component {
    render() {
      const deliverables = this.props.deliverables.map((deli, key) =>(
      <li className="list-deliverables" key={key}>{deli.deliverable}</li>
      ));
        return (
          <div className="container">
            <div className="img--team-sizing">
              <Image src={this.props.imgSrc} responsive />
            </div>
            <div className="row--resize">
              <div className="btn-position col-lg-6">
                <div>
                    <h2 className="column-title-team">{this.props.teamname}</h2>
                    <p>{this.props.description}</p>
                </div>
                <a className="btn-apply" href="#" type="button"> Apply</a>
              </div>
              <div className="col-lg-6">
                <div>
                  <h2 className="column-title-team">Key Deliverables</h2>
                  <p>{this.props.description}</p>
                  <div className="list-container">
                    {deliverables}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
