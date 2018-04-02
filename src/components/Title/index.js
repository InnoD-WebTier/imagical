import React from 'react';
import './index.css';

export default class Title extends React.Component {
    render() {
        return (
            <div className="titleContainer">
                <h1 className="title">{this.props.title}</h1>
            </div>
        );
    }
}
