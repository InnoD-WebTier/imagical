import React from 'react';

export default class Member extends React.Component {
    render() {
        return (
            <div className="member" style={{background: "url(" + this.props.imageUri + ")"}}>
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

